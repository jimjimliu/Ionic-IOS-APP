<?php
    /* =================================================================
     PHP 连接数据库脚本;
     连接由Hostinger提供的远程服务器；
     数据库类型为： MySQL
     @param：
     servername: 远程服务器地址
     username:   用户名
     password:   数据库密码
     dbname:     数据库名称
     ================================================================= */
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "";

    
    // 创建连接
    if($conn = mysqli_connect($servername, $username, $password, $dbname)){
       //echo '连接成功';
       }else{
       echo '失败';
       }
    
    
?>
