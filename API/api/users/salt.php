<?php
    /**************************************************************************
     *  接口:
     *      {
     *          auth_code: 验证码，
     *          user_email: 账户
     *      }
     *  返回:
     *      {
     *          data: {salt: xxxx},
     *          current_user: xxx
     *      }
     *  2FA验证用户，请求salt，返回salt；
     **************************************************************************/
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    
    error_reporting(0);
    //连接数据库
    include "../../connection/redis.php";
    include "../../connection/connection.php";
    //导入相关方法
    include "../../common/utils.php";
    
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
    
    //获取post数据
    $DATA = get_post_data();
    $remote_auth_code = $DATA['auth_code'];
    $email = $DATA['user_email'];
    
    $sql = "select phone_num, salt from users where email='$email';";
    //获取手机号
    $phone_num = $conn->query($sql)->fetch_array()[0];
    //获取salt
    $salt = $conn->query($sql)->fetch_array()[1];
    
    /* 提取redis数据 */
    $redis_arr = $redis->hmget($email, array('code', 'phone'));
    
    /* 验证成功 */
    if( $remote_auth_code == $redis_arr['code'] ){
        //更新用户手机号
        if ($phone_num == '0'){
            //更新手机号
            update_db($conn, $email, $redis_arr['phone']);
        }
        //删除redis缓存
        $redis->del($email);
        echo response_data(array('salt'=>$salt));
    }else{
        echo response_message("Session Expired. Please Send Verification Code Again.");
    }
    
    
?>
