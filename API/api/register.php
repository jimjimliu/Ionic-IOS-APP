<?php
    /* =================================================================
     |  创建时间： 2018-05-01                                           |
     |  Data Posted:                                                  |
     |          用户邮箱: String                                        |
     |          用户密码: String                                        |
     |  Date respond:                                                  |
     |          {"date": Boolean, "current_user":xx}                   |
     |  为新用户注册， 插入新的用户到数据库；                                 |
     ================================================================= */
    
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json');
    //链接数据库
    include "../connection/connection.php";
    //导入相关方法
    include "../common/utils.php";
    //启动会话
    session_start();
    
    /* =================================================================
     注册， 插入新条目到数据库；
     需要注意，此方法需要传入连接数据库后返回的$conn对象, 否则方法内部的$conn只是一个局部定义的变量，
     并不是导入的 $conn 对象；
     @return:
        Boolean
    ================================================================= */
    function register($conn, $email, $password){
        $sql = "INSERT INTO users(email, password, phone_num) VALUES('$email','$password',0)";
        $result = $conn->query($sql);
        return $result;
    }
    
    /* =================================================================
     返回数据；
     @param:
        $result: Boolean
     @return:
        void
    ================================================================= */
    function respond($result){
        if ($result) {
            echo response_data($result);
        } else {
            echo response_message("Register error! Please use another Email");
        }
    }
/* ========================================我是分割线======================================================= */
    $DATA = get_post_data();
    $email = $DATA['email'];
    $password = $DATA['password'];
    
    //注册
    $result = register($conn, $email, $password);
    //返回数据
    respond($result);

?>
