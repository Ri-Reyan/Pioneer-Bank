var newPage = document.getElementById("login")
newPage.addEventListener("click",function(click){
    var oldPage = document.getElementById("page-one")
    oldPage.style.display ="none"
    var afterEvent = document.getElementById("page-two")
    afterEvent.style.display ="block"
}) 

var connectionOne = document.getElementById("depositpress");
connectionOne.addEventListener("click", function(){
    var depositIn = document.getElementById("depositIn").value;
    var potOne = parseFloat(depositIn)
    var deposit = document.getElementById("deposit").innerText;
    var potTwo = parseFloat(deposit);
    var total = potOne + potTwo;

    document.getElementById("deposit").innerText = total;
    document.getElementById("depositIn").value = "";

    var balance = document.getElementById("balance").innerText;
    var mainBalance = parseFloat(balance)
    var mainPot = potOne + mainBalance;
    document.getElementById("balance").innerText = mainPot;})

var connectionTwo = document.getElementById("withdrawpress");
connectionTwo.addEventListener("click", function(){
   var balance = document.getElementById("balance").innerText;
   var balanceTwo = parseFloat(balance)
   var withdrawIn = document.getElementById("withdrawIn").value;
   var potThree = parseFloat(withdrawIn);
   var mainPotTwo = balanceTwo - potThree;
   document.getElementById("balance").innerText = mainPotTwo;
   
   
  var withdraw = document.getElementById("withdraw").innerText;
  var potFour = parseFloat(withdraw)
  var result = potFour + potThree;
  document.getElementById("withdraw").innerText = result;

})