/* console.log(1+1);
console.log('1'+'1');
string="Lorem ipsum dolor sit amet, consectetur adipicing sed, do eimused ..."
console.log(string.length);
*/


var a=1; //변수 선언
console.log(a);
a=2;
console.log(a);

major ="컴퓨터공학과";
id="2019102172";
name="박민영";

//template literal - '\n' 안써도됨
var letter = `I'm ${major} ${id} 
${name}.`
console.log(letter);

//배열
var arr=['seoul','daegu','busan'];
console.log(arr);
console.log(arr.length);
arr.push('incheon');
console.log(arr);


//객체
var alphabet={'a':'apple', 'b':'bus','c':'car'};
console.log(alphabet.b);//bus
console.log(alphabet['b']);//bus

/* same as
  ↑ alphabet['a']='apple';

*/

for (var a in alphabet){
    console.log('object is',a,',value is',alphabet[a]);
}

//객체의 메서드 만들기
alphabet.showAll=function(){
    for (var key in this){
//        document.write(key+':'+this[key]+'<br>')
        console.log(key+':'+this[key]+'\n')
}

}
alphabet.showAll();



//함수
function sum(a,b){
    return a+b;
}

//객체로써의 함수
var object={
    v1:'v1',
    v2:'v2',
    f1:function(){console.log(this.v1);},
    f2:function(){console.log(this.v2);}
}

object.f1();
object.f2();

//동기와 비동기





//객체로써의 함수

var f=function(){
    console.log(1);
    console.log(1+1);
}
var a=[f]; //a는 f를 원소로 갖는 배열
a[0]();//f(); 1 2 출력

var o={
    func:f
}
o.func(); //f실행


//문자열
var str=' Hello World';
console.log(str.toUpperCase());
console.log(str.indexOf('o'));
console.log(str.trim());
