<?php
    
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱: String                                        |
     |          日期选择 is_day_selected: Boolean                       |
     |          起始日期 from_date: Date YYYY-MM-DD                     |
     |          结束日期 to_date: Date YYYY-MM-DD                       |
     |    或者：                                                        |
     |          用户邮箱: String                                        |
     |          返回最近30天 returnLatest30: Boolean                    |
     |          月份: Date MM                                          |
     |          年份: Date YYYY                                        |
     |                                                                |
     |  Data respond:                                                 |
     | [{date,name,amount,bill_id},{date,name,amount,bill_id}, {...}] |
     |                                                                |
     |  查询两个指定日期之间的账单数据并且返回数据，post data 有可能不同，       |
     |  要根据是否有日期的选择进行判定，如果没有选择日期，则返回最近30天的账单信息。|
     |  如果有日期选择，则返回两个日期之间的账单信息。                         |
     |  如果没有日期选择，没有最近30天的选择，则返回所选择的月份的账单。          |
     ================================================================= */
    
    /*
     返回近期的账单列表；
     返回数据格式： [{date,name,amount,bill_id},{date,name,amount,bill_id}, {...}]
     */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../connection/connection.php";
    // 导入相关方法
    include "../common/utils.php";
    //启动会话
    session_start();
    
    $POST_DATA = get_post_data();
    $DATA = $POST_DATA['data'];
    $user = $DATA['email'];
    $day_selected = $DATA['is_day_selected']; //Boolean
    $_SESSION['email'] = $user;
    
    /* if day selected, return details between the two selected date */
    if( $day_selected ){
        $from_date = $DATA['from_date'];
        $to_date = $DATA['to_date'];
        $sql = "select date_of_bill, name, amount,bill_id from pastBills where date_of_bill >'$from_date' and date_of_bill <'$to_date' and user = '$user' order by date_of_bill DESC;";
        $result = $conn->query($sql);
    }
    else if(!$day_selected) {
        /* else, if returnLastest30 is true, return detailes of lastest 30 days */
        if( $DATA['returnLatest30'] ){
            $sql = "select date_of_bill, name, amount,bill_id from pastBills where user='$user' order by date_of_bill DESC limit 30;";
            $result = $conn->query($sql);
        }
        /* else, return details of selected month */
        else{
            $month = $DATA['month'];
            $year = $DATA['year'];
            $sql = "select date_of_bill, name, amount, bill_id from pastBills where month='$month' and year='$year' and user='$user' order by date_of_bill DESC;";
            $result = $conn->query($sql);
        }
    }
    
    $result_array = array();
    /* 逐条插入array */
    while($row = $result->fetch_array()){
        $temp_array = array('date' => $row[0],
                            'name' => $row[1],
                            'amount' => $row[2],
                            'bill_id' => $row[3]);
        array_push($result_array, $temp_array);
    }
    
    //返回数据
    if ($result) {
        echo response_data($result_array);
    } else {
        echo response_message("Retrieval Error, bill cannot be fetched from database.");
    }
    ?>
