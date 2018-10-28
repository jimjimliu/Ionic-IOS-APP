<?php
    
    /* =================================================================
     |  创建时间： 2018-05-01                                            |
     |  Data Posted:                                                   |
     |          用户邮箱                                                 |
     |  Date respond:                                                  |
     |          {                                                      |
     |           "data": {"id":xx,"email":xxx,"password":xxx},         |
     |           "current_user":xx                                     |
     |          }                                                      |
     |  查询数据库是否有跟post过来的邮箱相关联的数据，有数据则用户数据，           |
     |  没有数据则返回提示信息；                                            |
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
    $email = $DATA['email'];
    $_SESSION['email'] = $email;
    
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $user = $conn->query($sql)->fetch_array(MYSQLI_ASSOC);
    
    if ($user) {
        unset($user->password);
        
        /* $user 类型为： associative array
         $user: {"id":xx,"email":xxx,"password":xxx} */
        echo response_data($user);
    } else {
        echo response_message("User not exists");
    }
    
?>
