<?php
    /* ======================================================================
     接口：
        验证码 auth_code: String
     返回数据：
        {"data": Boolean, "current_user": xx}
     
     用户验证验证码， 验证成功后删除储存验证码的session；
     并且更新数据库，添加用户手机号；
     ====================================================================== */
    
    //会话ID
    session_id('jimliu');
    //开启会话
    session_start();
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    
    error_reporting(0);
    //连接数据库
    include "../connection/connection.php";
    //导入相关方法
    include "../common/utils.php";
    
    /* =================================================================
     *  更新数据库，添加用户手机号；
     *  需要注意，此方法需要传入连接数据库后返回的$conn对象, 否则方法内部的$conn只是一个局部定义的变量，
     *  并不是导入的 $conn 对象；
     *  @return: Boolean
    ================================================================= */
    function update_db($conn, $email, $phone){
        $sql = "update users set phone_num='$phone' where email='$email';";
        $result = $conn->query($sql);
        return $result;
    }

/* ========================================我是分割线======================================================= */
    
    //获取接口数据
    $DATA = get_post_data();
    $auth_code = $DATA['auth_code'];
    $email = $DATA['user_email'];
    
    /* session过期，清除send-sms.php中设置的session数据 */
    if( isset($_SESSION['expireTime']) and $_SESSION['expireTime'] < time()){
        //清除session数据
        unset($_SESSION['code']);
        unset($_SESSION['expireTime']);
        unset( $_SESSION['phone_num']);
    }
    
    /* 验证成功 */
    if( $auth_code == $_SESSION['code'] ){
        //清除session数据
        unset($_SESSION['code']);
        unset($_SESSION['expireTime']);
        //更新用户手机号
        if( ! update_db($conn, $email, $_SESSION['phone_num']) ){
            echo response_message("phone number update error.");
            unset($_SESSION['phone_num']);
            exit(0);
        }
        unset($_SESSION['phone_num']);
        echo response_data(true);
    }else{
        echo response_message("Session Expired. Please Send Verification Code Again.");
    }
    
    
?>
