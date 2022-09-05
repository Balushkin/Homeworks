let myNumber = 0;
function pluss() {
myNumber++;
console.log(myNumber);
document.getElementById('mycounter').innerText = myNumber;
};
function minus() {
    myNumber--;
    console.log(myNumber);
    document.getElementById('mycounter').innerText = myNumber;
}