<?php
    /*=============================================================================
     创建时间： 2018-05-01
     接口： {
            用户邮箱: String,
            年份: String YYYY
            }
     传出： {
            "data":  {min_year: year, max_year: year, name: amount, name:amount, name: amount, ...},
            "current_user":null
            }
     
     从数据库选择出每个category的总amount，放入array。以及账单的时间区间，例如最早的记录年份和最近的记录年份；
     =============================================================================*/
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../connection/connection.php";
    //导入相关方法
    include "../common/utils.php";
    //启动会话
    session_start();
    
    //get posted data
    $DATA = get_post_data();
    $user = $DATA['email'];
    $_SESSION['email'] = $user;
    $selected_year = $DATA['selected_year'];
    
    /* ===========================================================================================
     select category and the expense sum of each category
    =========================================================================================== */
    $sql = "select category, sum(amount) from pastBills where user='$user' and year='$selected_year' group by category;";
    $cat_sum_dict = $conn -> query($sql);
    /* ===========================================================================================
     select earlyest record year and the latest year
     =========================================================================================== */
    $sql2 = "select min(year), max(year) from pastBills where user='$user';";
    $result2 = $conn -> query($sql2) ->fetch_row();
    /* extract years */
    $min_year = $result2[0];
    $max_year = $result2[1];

    /* 新建关联数组, key是所有的category */
    $result_array = array(
        "min_year" => $min_year,
        "max_year" => $max_year,
        "rent" => '0',
        "super_market" => '0',
        "take_out" => '0',
        "clothes" => '0',
        "transportation" => '0',
        "other" => '0',
        "fees" =>'0',
        "insurance" => '0',
        "medical" => '0',
        "cigarette" => '0',
        "restaurant" => '0',
        "gas" => '0',
        "commodity" => '0'
    );
    /* 更新关联数组 */
    while($row = $cat_sum_dict->fetch_array()){
        $result_array[$row[0]] = $row[1];
    }
    
    /*=========================================================
     remove outliers;
     i.e. rent is outlier
     The total amount of rent is fixed and large, it takes a large portion in pie chart
     when we want to view data in the chart.
     =========================================================*/
    unset($result_array['rent']);

    //echo response_data($array);
    if ( mysqli_num_rows($cat_sum_dict) ) {
        echo response_data($result_array);
    } else {
        echo response_message("You do not have any expense this year so far.");
    }
?>
