<?php
    /*=============================================================================
     创建时间： 2018-05-01
     接口： {
        phone_number: 手机号,
        country_code: 区域码
     }
     传出： {"data": message->sid, "current_user": xxx}
     
     根据post过来的用户名，给相对应的手机号发送验证码；
     发送成功后返回验证码到前端；
     =============================================================================*/
    session_id('');
    //开启会话
    session_start();
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    
    require __DIR__ . '/vendor/autoload.php';
    use Twilio\Rest\Client;
    //导入相关方法
    include "../common/utils.php";
    
    /* ====================================================
     * 产生随机数串
     * @param integer $len 随机数字长度
     * @return string
     ==================================================== */
    function generate_code($len = 4)
    {
        $chars = str_repeat('0123456789', 3);
        // 位数过长重复字符串一定次数
        $chars = str_repeat($chars, $len);
        $chars = str_shuffle($chars);
        $str = substr($chars, 0, $len);
        return $str;
    }
    
/* ==========================================我是分割线=========================================== */
    $DATA = get_post_data();
    $phone_number = $DATA['phone_number'];
    $country_code = $DATA['country_code'];
    $send_to = $country_code.$phone_number;
    
    /* 生成验证码 */
    $auth_code = generate_code();
    /* session 保存验证码120秒 */
    $_SESSION['code'] = $auth_code;
    $_SESSION['expireTime'] = time()+120;
    $_SESSION['phone_num'] = $phone_number;
    
    // Find your Account Sid and Auth Token at twilio.com/console
    // 配置信息发送者密保；
    $sid    = "";
    $token  = "";
    $twilio = new Client($sid, $token);
    
    /* 发送验证码，并且返回数据 */
    if ($phone_number){
        $message = $twilio->messages
        ->create($send_to, // to : +1xxxxxxx
                 array(
                       "body" => $auth_code,
                       "from" => ""
                       )
                 );
        
        echo response_data($message->sid);
    }else{
        echo response_message("Verification Fail: could not send verification code.");
    }
    
    //print($message->sid);
?>
