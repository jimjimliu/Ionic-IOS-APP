<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           
     |  Data Posted:                                                  
     |          email: 账户                                            
     |          password: 密码                                          
     |  Date respond:                                                  
     |          {"date": Boolean, "current_user":xx}                   
     |  为新用户注册。生成salt， hmac加密。插入新的用户到数据库，返回salt                         
     ================================================================= */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../../connection/connection.php";
    //导入相关方法
    include "../../common/utils.php";
    //启动会话
    session_start();
    
    /* =================================================================
     注册， 插入新条目到数据库；
     需要注意，此方法需要传入连接数据库后返回的$conn对象, 否则方法内部的$conn只是一个局部定义的变量，
     并不是导入的 $conn 对象；
     @return:
        Boolean
    ================================================================= */
    function register($conn, $email, $password, $salt){
        $sql = "INSERT INTO users(email, password, phone_num, salt) VALUES('$email','$password',0, '$salt');";
        $result = $conn->query($sql);
        return $result;
    }
    
    /* =================================================================
     返回数据；
     @param:
        $result: Boolean
     @return:
        Boolean
    ================================================================= */
    function respond($result){
        if ($result) {
            echo response_data(true);
        } else {
            echo response_message("Register error! Please use another Email");
        }
    }
/* ========================================我是分割线======================================================= */
    $DATA = get_post_data();
    $email = $DATA['email'];
    $password = $DATA['password'];
    //生成salt
    $salt = bin2hex(random_bytes(30));
    //hmac加密 密码+salt
    $psw = hash_hmac("sha256", $password, $salt);
    
    //注册
    $result = register($conn, $email, $psw, $salt);
    //返回数据
    respond($result);

?>
