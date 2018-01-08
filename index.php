<?php
$root = dirname(__FILE__);
require_once './autoload.php';
$autoloader = new autoLoader($root);
$autoloader->register();

$nav = new \SakuraRecordz\App\Components\Navbar();
$intro = new \SakuraRecordz\App\Components\Intro();
$about = new \SakuraRecordz\App\Components\About();
$releases = new \SakuraRecordz\App\Components\Releases();
$contact = new \SakuraRecordz\App\Components\Contact();
$footer = new \SakuraRecordz\App\Components\Footer();

?><!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="assets/index.css">
    <link href="https://fonts.googleapis.com/css?family=Black+Ops+One" rel="stylesheet">
    <title>Sakura Recordz！</title>
  </head>
  <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <?=  $nav->show(); ?>

    <!-- Intro Header -->
    <?= $intro->show(); ?>

    <!-- About Section -->
    <?= $about->show(); ?>

    <!-- Release Section -->
    <?= $releases->show(); ?>

    <!-- Contact Section -->
    <?= $contact->show(); ?>

    <!-- footer -->
    <?= $footer->show(); ?>

    <script src="assets/index.bundle.js"></script>
  </body>
</html>
