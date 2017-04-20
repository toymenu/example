//John Johnovich
/*
var name = 'John';
var surname = 'Johnovich';
var x = 4;
while(x >= 1){
	print(x-=1);
	if(x==0){
		print("Hello, "+name+" "+surname);
	}
};
*/

//spiderMonkey fail 2exp10
/*

print("Enter number: ");
var num = readline();
putstr("Enter exp: ");
var exp = readline();
var result = 1;
var cnt = 1;
while( cnt <= exp){
	result *= num;
	cnt++;
}
print(result);
//console.log(result);
*/

// *triangle
/*
var lines = 5;
var line = "";

var cnt = 1;
while(cnt <= lines){
	line += "*";
	print(line);
	cnt++;
}
*/

//for + else if else
/*
for(var i=0; i<=10; i++){
	if(i%2 == 0 && i !=0){
		print(i + " - even");
	}
	else if(i==0){
		print(i +" - zero");
	}
	else if(){
		
	}
	else{
		print(i + " - odd");
	}
}
*/

//age
/*
var age = 25;
var output = "";

if(age>=18 && age <60){
	output = "You need to work hard";
}
else if(age>59){
	output = "You are tiered";
}
else if(age>=1 && age<=17){
	output = "You are schooler";
}
else{
	output = "..hold on, I neet to call agent Moulder";
}
print(output);
*/

// continue break metka
/*
var i = 1;
metka:while(i<356){	
	for (var i=322; i<356; i++){
		if(i%4 != 0)
			continue;
		print(i);
		break metka;
	}
}
*/

//switch case
/*
var x = 22;
switch(x){
	// ===
	case 0:
		print("Zero");
		//;
		break;
	case 1: print("One"); break;
	case 2: print("Two"); break;
	case 3: print("Three"); break;
	case 4: print("four"); break;
	default: print("...");
}

var num = 2;
var str = "На ветку сидит "+num+" ворон";
var x = "";
if(num%100 < 11 || num%100 > 14){	
	switch(num%10){
		case 1: x = "а"; break;
		case 2: x = "ы"; break;
		case 3: x = "ы"; break;
		case 4: x = "ы"; break;
	}
}
print(str+x);
*/

//functions
/*
function abs(num){
	return(num<0)? -num : num;
}

print(abs(5));
print(abs(-5));
print(-5);

function sum(n1, n2){
	return n1 + n2;
}

var res = sum(5, 3);

function sayHello(name, sign){
	name = name || "Guest";
	sign = sign || "...";
	print("hello, "+name+sign);
}

sayHello("John","!");
var n = "Mike";
sayHello(n);
sayHello();
*/

/*
function power(base, exp){
	var res = 1;
	for(cnt = 0; cnt<exp; cnt++){
		print(res *= base);
	}
	print(res);
}

power(5, 5);

function mypow(base, exp){
	if (exp == 1 ) return base;
	return base * mypow(base, exp -1);
}

print(mypow(5, 5));
*/

/*
var x = "X";
var y = "Y";

function outer(){
	var x = "x";
	print("x: " + x);
	print("y: " + y);
	function inner(z){
		var y = "y";
		print("x: " + x);
		print("y: " + y);
		print("z: " + z);
	}
	inner("z");
}

outer();
print("x: " + x);
print("y: " + y);
*/

/*
function say(){
	return function(name){
		return greet+" "+name;
	};
}

greet = "Hello";
en = say();
ru = say();
print(en("John"));
print(en("Mike"));

greet = "Privet";

print(ru("Grisha"));
print(ru("Valera"));
*/

/*
function compare(x){
	return function(y){
		if(y==x) return null;
		return y>x;
	};
}

var c = compare(10);
print(c(9));
print(c(10));
print(c(11));
print(compare(324)(678));
*/
