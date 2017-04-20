<?
	$str = "string";
	$num = 0;
	function foo($str) use $num{
		$num+=2;
		echo $str.$num;
	}
	foo($str);
	echo $num;
	
	function my(){
		echo 'this is mine';
	}