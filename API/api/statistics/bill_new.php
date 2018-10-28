<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱 email: String                                  |
     |          消费类型 type: String                                   |
     |          消费类别 category: String                               |
     |          消费名称 name: String                                   |
     |          月份: String MM                                        |
     |          年份: String YYYY                                      |
     |          日期: String YYYY-MM-DD                                |
     |          消费金额: String                                        |
     |                                                                |
     |  Data respond:                                                 |
     |          {"data": Boolean,"current_user":xx}                   |
     |                                                                |
     |  向数据库插入新的数据条目，添加新的账单；                              |
     ================================================================= */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../../connection/connection.php";
    //导入相关方法
    include "../../common/utils.php";
    //启动会话
    session_start();
    
    $DATA = get_post_data();
    $user = $DATA['email'];
    $_SESSION['email'] = $user;
    $type = $DATA['info_type'];
    $category = $DATA['info_cat'];
    $name = $DATA['info_name'];
    $month = $DATA['info_month'];
    $year = $DATA['info_year'];
    $date = $DATA['info_date'];
    $amount = $DATA['info_amount'];

    
    /* get the new bill_id */
    $getID_query = "select MAX(bill_id)+1 from pastBills;";
    $new_bill_id = $conn->query($getID_query)->fetch_array()[0];


    //insert into database;
    $sql = "insert into pastBills values('$user','$type','$category','$name','$month','$year','$date', 2360, '$amount', '$new_bill_id');";
    $result = $conn->query($sql);
    
    if ($result) {
        echo response_data($result);
    } else {
        echo response_message("Insertion error, info did not get updated.");
    }
?>
