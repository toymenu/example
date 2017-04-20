// var x = 1;
// var y = x;
// var o1 = {name:"John"};
// var o2 = o1;

/*
var o = {
	param : 100,
	method : function (){
		var self = this;
		function test(){
			print(self.param);
		}
		test();
	}
};

o.method();
*/

/*
var user = {
	"name": "John",
	"age": "25",
	"admin": true,
	say: function(word){
		print(word + " from " + this.name);
	}
};

var mike = {
	name : "Mike"
};

function some(a, b){
	//print(this.name);
	print(arguments.length);
	print(arguments[2]);
}
print(some.length);
some.call(mike, 10, 20, 40);

mike.x = user.say;
mike.x("Hello");
user.say("Hi!");
*/

/*
for(var i in user)
	print(i + ": " + user[i]);
//for(var i=0; i in user; i++)
// 	print(i + ": " + user[i]);


var box1 = {
	"prop1" : "cntrl1",
	"prop2" : "cntrl2",
	"prop3" : "cntrl3"
}

var box2 = {
	"prop1" : "alt1",
	"prop2" : "alt2",
	"prop3" : "alt3"
	
}
*/

/*
var user = ["a", "b", "c"];
user[5] = "x";

for(var i=0; i<user.length; i++){
	if(user[i] != undefined){
		print(i + ": " + user[i]);
	}
}

arr = user.splice(1,2);
print(arr);
*/


/*
var s = user.toString();
print(s);

user.sort(function(a,b){});
print(user.unshift());
print(user)
v = user.push(123,1);
print(v);
*/

/*
var a = [5,12];
var b = [];
a[99] = 7;

for(var i in a){
	b.push(Math.pow(a[i], 2));
}
print(b);
*/

/*
function print(data){
	console.log.apply(console, arguments);
};
*/

/*
function foo(){
	var a = [];
	for(var i=0; i<3; i++)
		( function(i){
			a.push(function(){print(i)} );
		} )(i);
	return a;
}

print(foo(0));
var x = foo();
x[0]();
x[1]();
x[2]();
*/

/*
var s = 'Мы знаем, что монохромный цвет - это градация серого';
var txt = 'хром';
var word;

var pos = s.indexOf(txt);
if(pos != -1){
	var start = s.lastIndexOf(" ", pos)+1;
	var end = s.indexOf(" ", pos);
	if(end == -1)
		var res = s.slice(start);
	else
		var res = s.slice(start, end);
}
print(res);
*/

var aIdx = 97;
var alphabet = "";
for(var i=0; i<26; i++){
	
	print("<div style=\"display:inline\;margin:5px\">"+String.fromCharCode(aIdx+i)+"</div>");
	
}














