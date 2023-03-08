var myName = "CAL";
var myButton = document.querySelector("button");
//adds event listener using JavaScript
myButton.addEventListener("click", dataPrompt);

function dataPrompt() {
    //using concatenation
    //alert("My name is " + name);
    //using string literals
    alert(`My name is ${myName}`);
    var yourName = prompt("Please enter your name.", "Enter name here:");
    //using concatenation
    //alert("Your name is " + name);
    //using string literals
    alert(`Your name is ${yourName}`);

    var yourLastName = prompt("Please tell me your last name.", "Enter last name here.");
    alert(`Nice to meet you ${yourName} ${yourLastName}.`);
    var hrworked = prompt("Enter the hours worked", "First Number");
    var hrate = prompt("Enter your hourly rate", "Second Number");
    var gross = Number(hrworked) * Number(hrate);
    var result = Number(gross) * 0.2;
    var total =  Number(gross) - (result)
    alert(`The result is ${result}.`); 
    console.log(`gross ${gross}`);
    console.log(`uncle sams share: ${result}.`);
    console.log(`Net pay ${total}.`);
    console.log(`Your name is ${yourName}.\nNice to meet you ${yourName} ${yourLastName}.\nThe result is ${result}.`);
    var body = document.querySelector("body");
    var p = document.createElement('p');
    p.innerText = `gross ${gross}.\nuncle sams share: ${result} Net pay ${total}.`;
    body.appendChild(p);}