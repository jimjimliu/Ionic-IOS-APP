<?php
    /* =================================================================
     |  创建时间： 2018-10-25
     |  Data Posted:
     |          email: 账户
     |          hmac_psw: 密码
     |  Date respond:
     |          {
     |           "data": {Boolean},
     |           "current_user":xx
     |          }
     |
     |  客户端储存salt，验证用户邮箱和hmac加密后的密码；
     |  如果用户未验证手机号，引导验证；
     |  如果用户有手机号，验证密码；
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
    $local_psw = $DATA['hmac_psw'];

    //获取用户手机号
    $sql = "SELECT phone_num FROM users WHERE email = '$email';";
    $phone_num = $conn->query($sql)->fetch_array()[0];
    //获取密码
    $sql2 = "select password from users where email = '$email';";
    $db_psw = $conn->query($sql2)->fetch_array()[0];
    
    //有手机号
    if($phone_num != '0'){
        //验证成功
        if( $db_psw == $local_psw ){
            echo response_data('True');
        }else{//验证失败
            echo response_message("Password Invalid");
        }
    }else{//无手机号
        echo response_data('False');
    }
?>
