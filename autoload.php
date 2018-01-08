<?php

class autoLoader
{
    private $system_root;

    public function __construct($root)
    {
         $this->system_root = $root;
    }

    public function register()
    {
        spl_autoload_register([$this, 'loader']);
    }

    public function loader($class)
    {
        $classNamespace = preg_replace('/^\\\\*(SakuraRecordz)*\\\\*/', '', $class);
        $classFileName = $this->system_root . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, $classNamespace) . '.php';
        if(is_readable($classFileName)){
            require_once $classFileName;
            return true;
        } else {
            return false;
        }
    }
}
