<?php

/**
 * Created by IntelliJ IDEA.
 * User: Max
 * Date: 27.09.2015
 * Time: 16:53
 */
class DbController
{
  static $host = "localhost";
  static $user = "maxgeisselsql3";
  static $pass = "b816e92a";
  static $db   = "maxgeisselsql3";

  //fetch one row from database
  public static function fetchOne($query){
    $conn = new mysqli(DbController::$host, DbController::$user, DbController::$pass, DbController::$db);
    $result = $conn->query($query);
    $data = array();
    while($row = mysqli_fetch_array($result))
    {
      foreach($row as $k => $row){
        if(is_numeric($k))continue;
        $data[$k] = utf8_encode($row);
      }
    }
    return $data;
  }

  //fetch associative data from database (multiple rows)
  public static function fetchAssoc($query){
    if($query){
      $conn = new mysqli(DbController::$host, DbController::$user, DbController::$pass, DbController::$db);
      $result = $conn->query($query);
      $ret = array();
      while($row = mysqli_fetch_array($result))
      {
        $temp = array();
        foreach($row as $k => $v){
          if(is_numeric($k))continue;
          $temp[$k] = utf8_encode($v);
        }
        $ret[$row['id']] = $temp;
      }
      return $ret;
    }
    else return false;
  }

  //insert data into database
  public static function insert($query){
    if($query){
      $conn = new mysqli(DbController::$host, DbController::$user, DbController::$pass, DbController::$db);
      $conn->query($query);
      return $conn->insert_id;
    }
  }
  
  //fetch query
  public static function fetchQuery($query){
    $conn = new mysqli(DbController::$host, DbController::$user, DbController::$pass, DbController::$db);
    $result = $conn->query($query);
    $data = array();
    while($row = mysqli_fetch_array($result))
    {
      $tmp = array();
      foreach($row as $k => $row){
        if(is_numeric($k))continue;
        $tmp[$k] = utf8_encode($row);
      }
      array_push($data, $tmp);
    }
    return $data;
  }
}
