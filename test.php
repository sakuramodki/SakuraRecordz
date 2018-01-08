<?php
$root = './';
require_once './autoload.php';
$autoloader = new autoLoader($root);
$autoloader->register();

$test = new \SakuraRecordz\Components\Navbar();
