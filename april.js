<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Date Differential</title>
  </head>
  <body>

    <div class="container">
      <form id="form1" onsubmit="return dateDiff()">
        <div class="field">
          First Name: <input type="text" id= "fname" name="fname" placeholder="First Name">
          <p id="fnameD"></p>
        </div>
        <div class="field">
          Last Name: <input type="text" id="lname" name="lname" placeholder="Last Name">
          <p id="lnameD"></p>
        </div>
        <div class="field">
          User ID: <input type="text" id="userID" name="uid" placeholder="8-12 characters, must contain at least one number, uppercase and lowercase letter"><br>
          <p id="userIDD"></p>
        </div>
        <div class="field">
          Birthday: <input type="date" id="birthday" name="birthday">
          <p id="birthdayD"></p>
          </div>

          <input type="submit" value="Submit">
      </form>
      <p id="result"></p>
    </div>

    <script type='text/javascript'>
    //write a function that returns a message based on input and boolean selection value
      function showMessage(inputID, message, selection) {
        //add a D to the end of the input id to write to the message area below input
        inputID += "D";
        document.getElementById(inputID).innerHTML = message;
        return selection;
      }
      //call if input entered is incorrect, and sends a selection of false
      function errorMessage(inputID, message) {
        return showMessage(inputID, message, false);
      }
      //call if input is successful
      function successInput(inputID) {
        return showMessage(inputID, "", true);
      }
      //check if the input is blank
      function isBlank(inputID, message) {
        if (inputID.value.trim() == ""){
          return errorMessage(inputID, message);
        }
        return successInput(inputID);
      }
      //validate that the user ID meets the criteria, return the proper message based on input
      function validateUID(inputID, lengthMessage, invalidMessage) {
        //check if it is isBlank
        if (!isBlank(inputID, lengthMessage)) {
          return false;
        }
        //declare function variables
        var character = inputID.value;
        let capLetter = false;
        let lowLetter = false;
        let minNum = false;

        if (character.length() < 8 || character.length() > 12) {
          return errorMessage(inputID, lengthMessage);
        }
        for (let i=0; i<character.length(); i++) {
          let c = character.charAt(i);
          if (!isNaN(parseInt(c))) {
            minNum = true;
          } else {
            if (c == c.toUpperCase()) {
              capLetter = true;
            } else {
              lowLetter = true;
            }
        }
        if (capLetter && lowLetter && minNum) {
          return true;
        } else {
          return errorMessage(inputID, invalidMessage);
        }
      }
      //call the form element
      //set constants for the messages
      const form = document.querySelector("form1");
      const entry_REQUIRED = "Cannot be left blank";
      const len_REQUIRED = "User ID must be between 8 and 12 characters";
      const id_REQUIRED = "User ID must contain at least one number, and one upper and lowercase letter";

      //add an event listener to stop the submission of the form, and validate input
      form.addEventListener("submit", function (e) => {
        //stop submissionn of form until validation is complete
        e.preventDefault();
        //run validation functions
        let fnameValid = isBlank(document.getElementById("form1").elements.namedItem("fname").value, entry_REQUIRED);
        let lnameValid = isBlank(document.getElementById("form1").elements.namedItem("lname").value, entry_REQUIRED);
        let idValid = validateUID(document.getElementById("form1").elements.namedItem("userID").value, len_REQUIRED, id_REQUIRED);
        let bdayValid = isBlank(document.getElementById("form1").elements.namedItem("birthday").value, entry_REQUIRED);
        //if validationn checks out, submit the form
        if(fnameValid && lnameValid && idValid && bdayValid) {
          form.submit();
        }

      });

      function dateDiff() {
        //on submission, calculate how long the user has been breathing
        //call form element to get birthday
        const birthDate = document.getElementById("form1").elements.namedItem("birthday").value;
        let userBirthday= new Date(birthDate);
        let todayDate= new Date();
        //create a variable for seconds be subtracting the milliseconds of your birthday from todays date
        let aliveSeconds= todayDate-userBirthday;
        //convert to days
        var aliveDays= int((((aliveSeconds/1000)/60)/60)/24);
        //set minimum age for class
        var minAge= int(365/18);
        //check if old enough to be in the class, if not tell the user they are not old enough
        //if they are old enough, tell them how many days they have been breathing
        if aliveDays < minAge {
            document.getElementById("result").innerHTML="You are not old enough to take this class!";
        } else {
            document.getElementById("result").innerHTML= fname + " " + lname + " you have been breathing for " + aliveDays + " days!";
            incrementalX();
          }
      }

      function incrementalX() {
        let myX="";
        //use for loop to write x, where you add an x for iteration of inner loop
        for (let i=1; i<20; i++) {
          //add the new line of x's to the string
          myX += myX.padStart(i,"x") + "/n";
        }
        //print the string to results
        document.getElementById("result").innerHTML=myX;
      }


    </script>
  </body>
</html>
