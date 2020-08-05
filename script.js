// generate pin number
function generateCode(){
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("showGeneratedPin").value = randomNumber;
  }

// try left section
function tryLeft(){
  const tryLeftNumber = document.getElementById("tryLeft");
  const tryLeftValue = parseFloat(tryLeftNumber.innerText);
  const remainingTry = tryLeftValue - 1;
  tryLeftNumber.innerText = remainingTry;
  if(tryLeftNumber.innerText == 0){
      document.getElementById('submit-button').style.display = 'none'
  }
}

//  pin match/submit button function
function pinMatch() {
      const generateCode = document.getElementById("showGeneratedPin").value
      const inputCode = document.getElementById("inputNumber").value

      if(generateCode == '' || inputCode == ''){
          alert('Please Input Generated Pin');
      }
      else if(generateCode == inputCode){
          document.getElementById("pin-matched").style.display = 'block';
          document.getElementById("pin-not-match").style.display = 'none';
      }
      else{
          document.getElementById("pin-not-match").style.display = 'block';
          document.getElementById("pin-matched").style.display = 'none';
          tryLeft()
      }   
  }