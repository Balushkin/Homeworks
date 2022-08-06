let x = 1;
let y = 2;
let res1 = '+x + y';
console.log(res1);
console.log(typeof res1);
let res2 = '+boolean(x)+2';
console.log(res2);
console.log(typeof res2);
let res3 = Boolean(x);
console.log(res3);
console.log(typeof res3);
let res4 = y;
 console.log(parseInt('y'));
 console.log(typeof y);//task 1



let num = prompt ('please enter number');
if(num > 0 && num %2 ===0) {
  alert('Парне');
}
if(num %7 === 0);{
  alert('Кратне 7');
}//task 2



let book = [3, 'string', true, null];
console.log(book);
console.log(book.length);
let nameOfBook = prompt('Write please Harry Potter');
alert(`Your write ${nameOfBook}`);
book.push('Harry Potter')
book [5] = 'Harry Potter';
console.log(book[5]);
console.log(book.length);
book.shift();
console.log(book.length);//task 3


 
let cities = ['Rome', 'Lviv', 'Warsaw'];
c = cities.join('*');
alert(c);//task4


 
 let isAdult = prompt('What is your age?');
 let res = (isAdult>18) ? 'You are adult' : 'You are child';
alert(res);//task 5



let a = parseFloat(prompt('Введіть першу сторону трикутника'));
let b = parseFloat(prompt('Введіть другу сторону трикутника'));
let c = parseFloat(prompt('Введіть третю сторону трикутника'));
let p = (a + b + c)/2;
let s = Math.sqrt( p * ( p - a ) * ( p - b ) * ( p - c ));
console.log("plosha = " + s.toFixed(3));
if (a**2 == b**2 + c**2) {
console.log('Correct data')
} else {
if ( b**2 == a**2 + c**2 ) {
console.log('Correct data')
} else {
if ( c**2 == b**2 + a**2 ) {
console.log('Correct data')  
} else {
console.log('Incorrect data')
}
} 
}//task 6



let
now = new Date(),
  hours = now.getHours();
console.log(hours);
if (hours > 23 || hours < 5 ) {
alert ('Доброї ночі');
} else {
if (hours >= 5 && hours < 11) {
alert ('Добрий ранок');
} else {
if (hours >=11 && hours <= 17) {
alert ('Доброго дня');
} else {
alert ('Доброго вечора');
}
}
};//task 7



let
now = new Date(),
  hours = now.getHours();
  console.log(hours);
switch (hours) {
case 23 :
case 24 :
case 1 :
case 2 :
case 3 :
case 4 :
case 5 : 
alert ('Good night');
break;
case 6 :
case 7 :
case 8 :
case 9 :
case 10 :
case 11 :
alert ('good morning');
break;
case 12 :
case 13 :
case 14 :
case 15 :
case 16 :
case 17 :
alert ('good day');
break ;
case 18 :
case 19 :
case 20 :
case 21 :
case 22 :
alert ('good evening');
break;
}//task 7