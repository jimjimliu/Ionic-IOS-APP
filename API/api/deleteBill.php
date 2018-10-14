<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱: String                                        |
     |          账单ID: String                                         |
     |                                                                |
     |  Data respond:                                                 |
     |          {"data":Boolean, "current_user": xx}                  |
     |                                                                |
     |  删除数据库中与账单ID相对应的数据条目，由于账单ID是primary key，        |
     |  所以最多只有一条可被删除。                                         |
     ================================================================= */
    
    /*
     删除post过来的bill_id相对应的条目；
     */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../connection/connection.php";
    //导入相关方法
    include "../common/utils.php";
    //启动会话
    session_start();
    
    $DATA = get_post_data();
    $email = $DATA['email'];
    $ID = $DATA['billID'];
    
    /* 删除数据库条目 */
    $sql = "delete from pastBills where bill_id = '$ID' and user='$email';";
    $result = $conn->query($sql);
    
    /* 返回数据 */
    if ($result) {
        echo response_data($result);
    } else {
        echo response_message("Deletion Error.");
    }
?>
