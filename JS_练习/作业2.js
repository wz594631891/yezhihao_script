
// 1.（循环）输出1-100之间能被3整除的数。
for (var i = 100 ; i >=1; i--) {
	if((i%3)==0){console.log(i)}
}
2.（循环）计算1-1000之间能被3整除的偶数的个数。
var count=0;
for (var i = 100 ; i >=1; i--) {
	
	if((i%3)==0 && i&2==0){count++;}
}
console.log(count)
3.（循环）循环输出h1～h6标签：
在javascript中使用for循环在页面中输出如下效果：
h1
h2
h3
h4
h5
h6
for (var i = 6  ; i >= 1; i--) {
	// <h1>h1</h1>

	document.write("<h"+i+">h"+i+"</h"+i+">")
	
}
4.（流程：分支与循环）输出从2000年（含）到3000年（含）间的所有闰年1
附：闰年就是能被4整除且不能被100整除的年，或者能被400整除的年。
for (var i = 3000 ; i >= 2000; i--) {
if(((i%4)==0 && (i%100)!=0)||(i%400)==0){console.log(i)}
}

5.（很难）使用星号输出倒金字塔图案(行数由初始变量n确定)：
*****
 ***
  *
for (var i=0; i < 3; i++) {
	//输出空格 0 1 2
 console.log(" ")
	
	// 输出* ***** *** *
	for (var j=1; j =< j-i; j++) {
	console.log("*")

}


}


6.（循环，分析）一张纸的厚度是0.01毫米，则该纸对折30次后是多厚（据说超过珠穆朗玛峰的高度）。反过来，一张纸对折几次后，就超过1米厚了？
var sum=0.01;
for (var i=0; i < 30; i++) {
sum*=2;
console.log(sum)
	}
	
	//
	var i=1;
var sum=0.01/1000; //米
while(sum<=1{
sum*=2;

}
console.log(sum)
7.（循环，简单运算）使用3种循环语句计算1到100的所有数的平方和。
var sum=0;
for (var i=1; i <=100; i++) {
sum+=Math.pow(i,2);

	}
	console.log(sum)
8.（循环，简单逻辑）写一个程序输出1到100这些数字。但是遇到数字为3的倍数的时候，输出“三”替代数字，为5的倍数用“五”代替，既是3的倍数又是5的倍数则输出“三五”。

 
for (var i=1; i <=100; i++) {
if(i%3==0&&i%5==0){
	console.log("三五")
continue;
}
//为三的倍数
if(i%3==0 ){
	console.log("三")
}
else if(i%5==0){
	console.log("五")
else{
	console.log(i)
}
}

	}
	


