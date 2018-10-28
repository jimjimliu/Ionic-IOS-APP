<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱: String                                        |
     |          月份: String MM                                        |
     |  Data respond:                                                 |
     |          {"data":{"monthly_total":xx,"monthly_left":xx,        |
     |      "totalSum":xx,"numberofExpense":xx},"current_user":xx}    |
     |                                                                |
     |  查询及返回用户在相应的月份的账单总览数据， 包括：                      |
     |      用户总消费额， 当前月份消费金额，共有多少笔交易数量，当月余额         |
     ================================================================= */

    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../../connection/connection.php";
    //导入相应方法
    include "../../common/utils.php";
    //启动会话
    session_start();
    
    /* =========================================================
     查询和返回用户在相应月份的总花销；如果没有查询到花销数额，返回0；
     @param:
         $conn: Connection Object
         $current_month: String (Int)
         $email: String
     @return:
        String (number of String type)
     ========================================================= */
    function cur_month_expense($conn, $current_month, $email){
        /* get total expense of the posted month; */
        $monthlySum = "select SUM(amount) from pastBills where month='$current_month' and user='$email';";
        $result = $conn->query($monthlySum) -> fetch_array()[0];
        
        /* if no expense in the current month, set result to 0; */
        if(!$result){
            $result = '0';
        }
        return $result;
    }
    
    /* =========================================================
     查询相应月份的剩余可用余额；
     @param:
         $conn: Connection Object
         $current_month: String (Int)
         $email: String
         $total_Expense: String (number)
     @return:
        String (number)
     ========================================================= */
    function get_amount_left($conn, $current_month, $email, $total_Expense){
        //get how much available amount left for the posted month;
        $monthly_left = "select monthly_expect from pastBills where month='$current_month' and user='$email';";
        $result = $conn->query($monthly_left) -> fetch_array()[0] - $total_Expense;
        
        /* if no expense in the current month, return a default number for now */
        if(!$result){
            $result = 2360;
        }
        return (string)$result;
    }
    
    /* =========================================================
     查询用户的所有消费总金额；
     @param:
         $conn: Connection Object
         $email: String
     @return:
        String (number)
     ========================================================= */
    function get_total_sum($conn, $email){
        //get the total amount of all bills;
        $totalSum = "select SUM(amount) from pastBills where user='$email';";
        $result = $conn->query($totalSum) ->fetch_array()[0];
        
        /* if no expense at all, return 0; */
        if(!$result){
            $result = '0';
        }
        return $result;
    }
    
    /* =========================================================
     查询用户共有多少笔交易；
     @param:
         $conn: Connection Object
         $email: String
     @return:
        String (number)
     ========================================================= */
    function get_transaction_amount($conn, $email){
        //get the number of bills;
        $numberofExpense = "select COUNT(*) from pastBills where user='$email';";
        $result = $conn->query($numberofExpense) -> fetch_array()[0];
        return $result;
    }

/*=========================================我是分割线===========================================================*/
    
    $DATA = get_post_data();
    $email = $DATA['email'];
    $current_month = $DATA['selected_month'];
    
    //查询当前月总开销
    $total_Expense = cur_month_expense($conn, $current_month, $email);
    //查询当前月余额
    $amount_left = get_amount_left($conn, $current_month, $email, $total_Expense);
    //查询总消费额
    $total_sum = get_total_sum($conn, $email);
    //查询用户有多少笔交易
    $number_of_Expense = get_transaction_amount($conn, $email);
    
    
    //push into array;
    $array = array('monthly_total' => $total_Expense,
                   'monthly_left' => round($amount_left,2),
                   'totalSum' => $total_sum,
                   'numberofExpense' => $number_of_Expense);
    
    //返回相应数据
    if ($total_Expense!=null && $total_sum!=null && $number_of_Expense!=null && $amount_left!=null) {
        echo response_data($array);
    } else {
        echo response_message("Database Fetching Error, Check backend files.");
    }
?>
