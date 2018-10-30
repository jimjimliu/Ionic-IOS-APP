<?php
    /*************************************************************************
     * 接口: 
     *      {
     *          phone_number: 手机号，
     *          country_code: 区域码,
     *          user_email: 账户
     *      }
     *     
     * 返回数据:
     *      {
     *          "data": Boolean, "current_user": xxx
     *      }
     *      
     * 验证账户，如果有账户，发送手机验证码；
     *************************************************************************/
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    
    //导入相关方法
    include "../../connection/redis.php";
    include "../../common/utils.php";
    
    $DATA = get_post_data();
    $phone_number = $DATA['phone_number'];
    $country_code = $DATA['country_code'];
    $email = $DATA['user_email'];
    
    /* 验证账户 */
    // 待写
    
    //发送验证码
    if (send_sms($country_code, $phone_number, $email)){
        echo response_data(true);
    }else{
        echo response_message("Message could not be sent.");
    }

?>
