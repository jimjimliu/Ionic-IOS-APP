<?php
    
    /*******************************************************************
     * Connction to Redis
     ******************************************************************/

    $redis = new Redis();
    $redis->connect('', 6379,1);
?>
