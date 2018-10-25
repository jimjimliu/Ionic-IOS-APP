<?php
    
    /* =================================================================
     |  创建时间： 2018-05-01                                               |
     |  PHP 服务脚本， 为API提供帮助性函数                                     |
     ================================================================= */
    
    //导入库
    require __DIR__ . '/../api/vendor/autoload.php';
    use Twilio\Rest\Client;
    
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
    
    /* ====================================================
     * @param:
     *      $send_to: 手机号
     *  发送手机验证码
     ==================================================== */
    function send_sms($send_to){
        session_id('jimliu');
        session_start();
        $auth_code = generate_code();
        $_SESSION['code'] = $auth_code;
        $_SESSION['expireTime'] = time()+120;
        
        $sid    = "";
        $token  = "";
        $twilio = new Client($sid, $token);
        
        /* 发送验证码，并且返回数据 */
        if ($send_to){
            $message = $twilio->messages
            ->create($send_to, // to : +1xxxxxxx
                     array(
                           "body" =>$auth_code,
                           "from" => ""
                           )
                     );
            $message->sid;
        }
    }
?>
