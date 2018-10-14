<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱                                                |
     |          用户密码                                                |
     |  Date respond:                                                  |
     |          {                                                      |
     |           "data": {"id":xx,"email":xxx,"password":xxx},         |
     |           "current_user":xx                                     |
     |          }                                                      |
     |  查询数据库，验证用户邮箱和密码是否有效，如果有效，返回查询结果，           |
     |  如果无效，返回提示信息；                                           |
     ================================================================= */
    
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
    $password = $DATA['password'];

    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $user = $conn->query($sql)->fetch_array(MYSQLI_ASSOC);

    if ($user) {
        unset($user->password);
        $_SESSION['email'] = $email;
        
        /* $user 类型为： associative array
         $user: {"id":xx,"email":xxx,"password":xxx} */
        echo response_data($user);
    } else {
        echo response_message("User does not exist or password error");
    }
?>
