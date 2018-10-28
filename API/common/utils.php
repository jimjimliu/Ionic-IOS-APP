<?php
    
    /* =================================================================
     |  创建时间： 2018-05-01                                               |
     |  PHP 服务脚本， 为API提供帮助性函数                                     |
     ================================================================= */
    
    /* 关闭error report机制，防止因显示warning造成的返回类型为json格式的数据错误 */
    error_reporting(0);
    require __DIR__ . '/../module/vendor/autoload.php';
    use Twilio\Rest\Client;
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }
    /*
     返回数据;
     @param:
        $data: associative array OR array
     @return:
        associative array
     */
    function response_data ($data) {
        return json_encode(array(
            'data' => $data,
            'current_user' => $_SESSION['email']
        ));
    }
    
    /*
     返回消息;
     @param:
        $message: String
     @return:
        associative array
     */
    function response_message ($message) {
        return json_encode(array(
            'message' => $message,
            'current_user' => $_SESSION['email']
        ));
    }
    //获取发送数据
    function get_post_data () {
        return json_decode(file_get_contents('php://input'), true);
    }
    /*
     检查是否登录
     @return: Boolean
     */
    function is_login () {
        return !empty($_SESSION['email']);
    }
    //获取当前用户
    function current_user () {
        return $_SESSION['email'];
    }
    
    
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
    
    /****************************************
     * @param $phone
     * @return boolean
     * 发送验证码到手机；
     ****************************************/
    function send_sms($country_code, $phone){
        session_id('');
        //开启会话
        session_start();
        /* 生成验证码 */
        $auth_code = generate_code();
        /* session 保存验证码60秒 */
        $_SESSION['code'] = $auth_code;
        $_SESSION['expireTime'] = time()+60;
        $_SESSION['phone_num'] = $phone;
        
        // Find your Account Sid and Auth Token at twilio.com/console
        // 配置信息发送者密保；
        $sid    = "";
        $token  = "";
        $twilio = new Client($sid, $token);
        
        $message = $twilio->messages
        ->create($country_code.$phone, // to : +1xxxxxxx
            array(
                "body" => $auth_code,
                "from" => ""
            )
            );
        if ( $message->sid ){
            return true;
        }else{
            return false;
        }
    }
    

?>
