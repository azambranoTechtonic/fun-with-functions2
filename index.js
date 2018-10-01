$(".answerKey").attr("style","display: none;") //DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
'Alexis Zambrano'

//problem-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function addNumbers(firstNumber, secondNumber) {
	var addNums = firstNumber + secondNumber;
	return addNums;
}

document.getElementById("problem-1").innerHTML = addNumbers(3,5);


//problem-2

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function substractNumbers(firstNumber, secondNumber) {
	var subNums = firstNumber - secondNumber;
	return subNums;
}

document.getElementById("problem-2").innerHTML = substractNumbers(10,8);

//problem-3

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function showresultsInBody(singleNumber) {
	console.log('The result of your calculation is ' + singleNumber);
}

document.getElementById("problem-3").innerHTML = showresultsInBody(5)


//problem-4

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function showResults(singleNumber) {

  var strResult = 'The result of your calculation is ' + singleNumber
	return strResult;
}

document.getElementById("problem-4").innerHTML = showResults(5)


//problem-5

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function multiplyNumbers(firstNumber, secondNumber) {
	var multNums = firstNumber * secondNumber;
	return multNums;
}

document.getElementById("problem-5").innerHTML = multiplyNumbers(5,10);


//problem-6

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function divideNumbers(firstNumber, secondNumber) {
	var divNums = firstNumber / secondNumber;
	return divNums;
}

document.getElementById("problem-6").innerHTML = divideNumbers(20,4);


//problem-7

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

document.getElementById("problem-7").innerHTML = showResults(addNumbers(3,5))


//problem-8

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

document.getElementById("problem-8").innerHTML = showResults(addNumbers(addNumbers(5,6),addNumbers(7,3)))


//problem-9

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

document.getElementById("problem-9").innerHTML = showResults(substractNumbers(multiplyNumbers(15,4),divideNumbers(10,2)))


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

function addTheWorld(...restArgs){

  var addNum = 0;

  for (var i = 0;i < restArgs.length;i++){
    addNum = addNum + restArgs[i];
  }

  return addNum;

}


document.getElementById("challenge-1.1").innerHTML = addTheWorld(5,2,8)
document.getElementById("challenge-1.2").innerHTML = addTheWorld(10,5,3,2)
document.getElementById("challenge-1.3").innerHTML = addTheWorld(25)
