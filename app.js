var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var NoOfNotes = document.querySelectorAll(".no-of-notes");

const NotesAvailable = [2000 , 500 , 100 , 20 , 10 , 5 , 1];

// console.log(billAmount.value);
checkButton.addEventListener("click" , function EvaluateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){
        var amountToBeReturned = cashGiven.value - billAmount.value;
        if(amountToBeReturned > 0){
            calculateAmount(amountToBeReturned);
        }
        else{
           showMessage("No returns");
        }
        
    }
    else{
       showMessage("Invalid Bill amount");
    }
});

function showMessage(newMessage){
    message.style.display = "block";
    message.innerText = newMessage;
}
function calculateAmount(amountToBeReturned){
    for(var i = 0 ; i < NotesAvailable.length ; i++){
        var NumberOfNotes = Math.trunc(amountToBeReturned / NotesAvailable[i]);
        amountToBeReturned %= NotesAvailable[i];

        NoOfNotes[i].innerText = NumberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

//showing the hidden div after clicking "next" btn
function showSection(){
    document.getElementById("next-container").style.display = "" ;
}
