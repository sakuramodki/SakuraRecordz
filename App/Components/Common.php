<?php
namespace SakuraRecordz\App\Components;

class Common {
  public function __construct() {
  }

  public function getTemplateName() {
    $classNamespace = preg_replace('/^\\\\*(SakuraRecordz)*\\\\*/', '', static::class);
    $classNamespace = preg_replace('/Components/', 'Template', $classNamespace);
    $fileName = str_replace('\\', DIRECTORY_SEPARATOR, $classNamespace) . '.tmpl';
    return $fileName;
  }

  public function show() {
    ob_start();
    include($this->getTemplateName());
    $result = ob_get_contents();
    ob_end_clean();
    return $result;
  }
}
