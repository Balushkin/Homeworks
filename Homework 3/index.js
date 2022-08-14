let array = [2, 3, 4, 5];
let total = 1;
for (let i = 0; i < array.length; i++) {
    total *= array[i];
}
console.log(total);//task 1




for (let i = 0; i <= 15; i++) {
    if (i > 0 && i % 2 === 0) {
        alert(`${i} is even`)
    } else {
        alert(`${i} is odd`)
    }
}


function randomArray(arraySize, maxLimit = 500) {
    let randomNumbers = [];
    for (let i = 1; i <= arraySize; i++) {
        let rand = Math.floor(Math.random() * maxLimit)
        randomNumbers.push(rand)
    }
    console.log(randomNumbers);
}
randomArray(5);



function raiseToDegree(a,b){
    if(a > 0 && a % 1 ===0) {
    alert(a**b);
    }else{
    alert('ne cile');
    }
    }
    let number = prompt();   
      let degree = prompt();
      raiseToDegree(number,degree);