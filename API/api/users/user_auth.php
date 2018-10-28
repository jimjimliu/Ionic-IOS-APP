<?php
    /**********************************************************************************
     * 接口:
     *      {
     *          email: 账户
     *      }
     * 返回:
     *      {
     *          data: { auth: Boolean },
     *          current_user: xxxx
     *      }   
     *      
     * 客户端没有salt，请求salt
     **********************************************************************************/
    
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

    $sql = "SELECT phone_num FROM users WHERE email = '$email';";
    //获取用户手机号
    $phone_num = $conn->query($sql)->fetch_array()[0];
    
    //未注册
    if($phone_num == null){
        echo response_message('User does not exist');
        exit();
    }

    //有手机号
    if($phone_num != '0'){
        //发送验证码
        send_sms("+1", $phone_num);
        $array = array('auth'=>true);
        echo response_data($array);
    }else{//无手机号
        $array = array('auth'=>false);
        echo response_data($array);
    }
?>
