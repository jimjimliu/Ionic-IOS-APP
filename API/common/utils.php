<?php
    
    /* =================================================================
     |  创建时间： 2018-05-01                                               |
     |  PHP 服务脚本， 为API提供帮助性函数                                     |
     ================================================================= */
    
    /* 关闭error report机制，防止因显示warning造成的返回类型为json格式的数据错误 */
    error_reporting(0);
    require __DIR__ . '/../module/vendor/autoload.php';
    use Twilio\Rest\Client;
    /* 连接redis */
    include "../connection/redis.php";
    $GLOBALS['redis'] = $redis;
    
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

    /**
     * 发送验证码到手机；redis保存验证码;
     * @param $country_code :地域码
     * @param $phone : 电话号
     * @param $email :账户
     * @return boolean
     */
    function send_sms($country_code, $phone, $email){
        /* 生成验证码 */
        $auth_code = generate_code();
        
        /* redis hash保存验证码+手机号, 保存六十秒 */
        $array = array('code'=>$auth_code, 'phone'=>$phone);
        $GLOBALS['redis']->hmset($email, $array);
        $GLOBALS['redis']->expire($email, 60);
        
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
            return $auth_code;
        }else{
            return false;
        }
    }
    
    
    /**
     * 删除redis中的键值;
     * @param  $key :redis 键
     * @return Integer 
     */
    function redis_del_key($key){
        return $GLOBALS['redis']->del($key);
    }

?>
