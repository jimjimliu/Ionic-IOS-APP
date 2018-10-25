<?php
    /* =================================================================
     |  创建时间： 2018-10-25
     |  Data Posted:
     |          email: 账户
     |  Date respond:
     |          {
     |           "data": { },
     |           "current_user":xx
     |          }
     |  客户端没有salt，请求返回salt；
     ================================================================= */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../connection/connection.php";
    //导入相关方法
    include "../common/utils.php";
    include "../common/send_sms.php";
    //启动会话
    session_start();

    $DATA = get_post_data();
    $email = $DATA['email'];

    //获取用户手机号
    $sql = "SELECT phone_num FROM users WHERE email = '$email';";
    $phone_num = $conn->query($sql)->fetch_array()[0];
    if($phone_num == null){
        echo response_message('User does not exist');
        exit();
    }
    //获取salt
    $sql2 = "select salt from users where email='$email';";
    $salt = $conn->query($sql2)->fetch_array()[0];
    
    //有手机号
    if($phone_num != '0'){
        //发送验证码
        send_sms("+1".$phone_num);
        //返回salt
        echo response_data($salt);
    }else{//无手机号
        $array = array('salt'=>$salt, 'auth'=>'False');
        echo response_data($array);
    }
?>
