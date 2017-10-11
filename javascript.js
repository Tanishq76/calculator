$("document").ready(function(){
  // Input array
  var inputs=[""];
  // String to store current value
  var totalString;
  // operators array for validation without .
  var operator1=["+","-","/","*"];
  //operators array for validation with .
  var operator2=["."];
  // Array of numbers
  var number = ["0","1","2","3","4","5","6","7","8","9"];
// gives input to the calculator
  function getValue (input){
    if(operator2.includes(inputs[inputs.length-1]==true) && input==="."){
    console.log("duplicate '.'");
  } else if (inputs.length===1 && operator1.includes(input)===false){
    inputs.push(input);
  } else if (operator1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  } else if (number.includes(input)){
       inputs.push(input);
  }
  update();
  }
  //updates the value of calculator
  function update(){
totalString=inputs.join("");
$("#resultField").html(totalString);

  }
  //evaluates the input given to the calculator
  function getTotal(){
    totalString=inputs.join("");
    $("#resultField").html(eval(totalString));
  }
  // check and update the onClick input
  $("a").on("click",function(){
    if(this.id=="allClear"){
      inputs=[""];
      update();
    } else if (this.id=="delete"){
    inputs.pop();
    update();
  } else if (this.id==="result"){
    getTotal();
  }
  else{
    if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
      getValue(this.id);
    } else {
    getValue(this.id);
    }
  }
  });
});
