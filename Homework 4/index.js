const sentence = 'is2 thi1s t4est 3a';
const words = sentence.split(' ');
console.log(words);
const sortedWords = [];
words.forEach(x => {
    if (x.includes(1)) {
        sortedWords[0] = x;
    } else if (x.includes(2)) {
        sortedWords[1] = x;
    } else if (x.includes(3)) {
        sortedWords[2] = x;
    } else if (x.includes(4)) {
        sortedWords[3] = x;
    } else if (x.includes(5)) {
        sortedWords[4] = x
    } else if (x.includes(6)) {
        sortedWords[5] = x;
    } else if (x.includes(7)) {
        sortedWords[6] = x
    } else if (x.includes(8)) {
        sortedWords[7] = x
    } else if (x.includes(9)) {
        sortedWords[8] = x
    }
})
console.log(sortedWords.join(' ')); //task 1



const bill = ['milk', 1, 20, 'beer', 3, 45, 'chips', 2, 30];
let sum = 0;
let max = 0;
let amount = 0;
for (let i = 0; i < bill.length; i = i + 3) {
    alert(`name: ${bill[i]}, amount: ${bill[i + 1]}, price:${bill[i + 2]}`);
    sum += bill[i + 2];
    amount++
    if (max < bill[i + 2]) {
        max = bill[i + 2];
    }
}
alert(sum);
alert(max);
alert(sum / amount);//task 2



let number1 = +prompt('Enter first number');
let number2 = +prompt('Enter second number');
let action = prompt('Action');
function count(number1, number2, action) {
    let result;
    switch (action) {
        case "+":
            result = number1 + number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "-":
            result = number1 - number2;
            break
        case "/":
            result = number1 / number2;
    }
    alert(result);
}
count(number1, number2, action);//task 3
