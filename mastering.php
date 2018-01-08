<?php
$root = dirname(__FILE__);
require_once './autoload.php';
$autoloader = new autoLoader($root);
$autoloader->register();

$nav = new \SakuraRecordz\App\Components\Navbar();
$mastring = new \SakuraRecordz\App\Components\Mastering();
$footer = new \SakuraRecordz\App\Components\Footer();

?><!doctype html>
<html lang="ja" class="menu-show">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="assets/mastring.css">
    <link href="https://fonts.googleapis.com/css?family=Black+Ops+One" rel="stylesheet">
    <title>Sakura Recordz！</title>
  </head>
  <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <?=  $nav->show(); ?>

    <!-- Intro Header -->
    <?= $mastring->show(); ?>

    <!-- footer -->
    <?= $footer->show(); ?>

    <script src="assets/mastring.bundle.js"></script>
  </body>
</html>
