
var terms = document.getElementById("Terms");

terms.addEventListener("click", function(){
alert("West Bank shall not be held liable for any fraudulent transactions carried out on your account. Therefore safeguard your details from unauthorised persons.");

});



var button = document.getElementById("btn");

btn.addEventListener("click", function() {
alert("You\'re welcome!, press ok to continue");

var number = prompt("Enter 1 to check account balance, Enter 2 to buy airtime, Enter 3 to transfer");

if (number == 1){
	alert("Your acct balance is N5000");

};

//Code for airtime processes

if(number == 2){
var airtime1 = prompt("Enter 1 for MTN, 2 for Airtel, 3 for GLO");
var chooseNumber = prompt("Enter 1 for self, Enter 2 for other");
if (chooseNumber == 2) {
var telephoneNumber = prompt("Enter telephone number");
if(telephoneNumber.length !== 11) {
alert("The phone number must be 11 digits");
return;
}
else {
var rechargeAmt = prompt("Enter amount");
if(rechargeAmt <= 100) { alert("You can't buy airtime less than N100"); return;}
else {

var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime to ${telephoneNumber}`);

var toContinue = prompt("Enter 1 to continue, 2 to cancel");
if (toContinue == 1) {
var pinCheck = prompt("Enter your PIN");
if(pinCheck.length == 4) { alert(`The purchase of ${rechargeAmt} airtime to ${telephoneNumber} was successful`)}

else {alert("Invalid PIN, PIN must be 4 digits")};
 return;
}
if (toContinue ==2) {alert("Transaction was cancelled"); return;}; 
};

}

};
if (chooseNumber == 1) {
var rechargeAmt = prompt("Enter amount");
if(rechargeAmt <= 100) { alert("You can't buy airtime less than N100"); return;}
else {

var detailConfirmation = alert(`You are about to buy ${rechargeAmt} airtime`);

var toContinue = prompt("Press 1 to continue, 2 to cancel");
if (toContinue == 1) {
var pinCheck = prompt("Enter your PIN");
if(pinCheck.length == 4) { alert(`The purchase of ${rechargeAmt} airtime was successful`)}

else {alert("Invalid PIN, PIN must be 4 digits")};
 return;
}
if (toContinue ==2) {alert("Transaction was cancelled"); return;}; 
};

}
}

//codes for the transfer processes.


if(number == 3){
	//var acctNum = prompt("Enter your account number");
	
	var amountt = prompt("Enter amount");

	if (amountt >= 500) {
	var bankName = prompt("1 for GTB, 2 for UBA, 3 for FBN");

	if(bankName == 1){
		var GTB = prompt("Enter beneficiary's account number");
		if(GTB.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ alert(`You are about to transfer ${amountt} to account number ${GTB}`) };
		
		var toContinue = prompt("Press 1 to continue, 2 to cancel");
		if (toContinue == 1)  {
		var pin1 = prompt("Enter your PIN");
		if(pin1.length == 4) {
		alert(`Your transfer ${amountt} was successful`);
		return;
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
		if (toContinue ==2) { alert("Transaction was cancelled")}
	}

if(bankName == 2){
		var UBA = prompt("Enter beneficiary's account number");
		if(UBA.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ alert(`You are about to transfer ${amountt} to account number ${UBA}`) };
		
		var toContinue1 = prompt("Press 1 to continue, 2 to cancel");
		if (toContinue1 == 1)  {
		var pin2 = prompt("Enter your PIN");
		if(pin2.length == 4) {
		alert(`Your transfer ${amountt} was successful`);
		return;
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
		if (toContinue1 ==2) { alert("Transaction was cancelled")}
	};

if(bankName == 3){
		var FBN = prompt("Enter beneficiary's account number");
		if(FBN.length !== 10) { alert("Account number must be 10 digits")
		return;
		}

		else 

		{ alert(`You are about to transfer ${amountt} to account number ${FBN}`) };
		
		var toContinue2 = prompt("Press 1 to continue, 2 to cancel");
		if (toContinue2 == 1)  {
		var pin = prompt("Enter your PIN");
		if(pin.length == 4) {
		alert(`Your transfer ${amountt} was successful`);
		return;
		} else 
		{
		alert("Invalid PIN, PIN must be 4 digits") };
		}
	if (toContinue2 ==2) { alert("Transaction was cancelled")}
	};

	}
	else { alert("You can\'t transfer amount less than N500")}
	}
	
});

