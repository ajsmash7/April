<!DOCTYPE html>
<html>
  <body>



    <div>
      <form>
        First Name: <input type="text" name="fname"></br>
        Last Name: <input type="text" name="lname"></br>
        User ID: <input type="text" id="userID" name="uid"></br>
        Birthday: <input type="date" id="birthday" name="birthday"></br>>
        <p><button onclick="dateDiff()">Accept</button></p>
      </form>

    </div>

    <script>
      //function to validate ID constraints before printing output
      function dateDiff() {

        //get the user input for userID by element ID
        var idCheck = document.getElementById("userID").innerHTML;
        //check that length is correct, if it is, continue validation of characters
        //if false, display length error
        if (idCheck.length>=8 && idCheck.length<=12) {
          //create empty variables set to false for uppercase, lowercase and numeric values
          var idCapital = 0;
          var idNumber = 0;
          var idLower = 0;

          //use a for loop to check the user ID characters
          for(let i=0; i<idCheck.length; i++) {
            var character = idCheck.charAt(i);
            //if the character is not a number check if it is capitalized, if so set value to true
            // if it is not a number set lowercase value to true
            //if it is a number, set number value to true
            if (isNaN(parseInt(character))) {
              if (character == character.toUppercase()) {
                idCapital = 1;
              }else {
                idLower = 1;
              }
            } else {
            //use parseInt to check if the character is Not a Number, if NaN is false, set value to true
              idNumber = 1;
            }
          }
          //if user id is not the correct length, alert user
        } else {
          alert("user ID needs to be between 8 and 12 characters. Please re-enter user ID")
        }
          // if all parameters are true, allow birthday calculation to run, otherwise alert user to try again
          //if parameters are true, run the x program
        if (idCaptial == 1 && idLower == 1 && idNumber == 1) {
            var birthDate = document.getElementById("birthday").innerHTML;
            //clear the dates and add current input
            var userBirthday= new Date(birthDate);
            var todayDate= new Date();
            //create a variable for seconds be subtracting the milliseconds of your birthday from todays date
            var aliveSeconds= todayDate-userBirthday;
            //convert to days
            var aliveDays= int((((aliveSeconds/1000)/60)/60)/24);
            //set minimum age for class
            var minAge= int(365/18);
            //check if old enough to be in the class, if not tell the user they are not old enough
            //if they are old enough, tell them how many days they have been breathing
            if aliveDays<minAge {
                document.write("You are not old enough to take this class!");
            } else {
                document.write(fname + " " + lname + " you have been breathing for " + aliveDays + " days!");
                incrementalX();
              }
        } else {
            alert("User ID must contain at least one Uppercase letter, Lowercase letter, and one number")
            }
      }
      function incrementalX() {
        //set character to "x"
        let myX = "";
        //use nested for loop to write x, where you add an x for iteration of inner loop
        //and a space for iteration of the outer loop
        for (let i=0; i<20; i++) {
          for (let j=0; j<20; j++){
            myX += "x";
          }
          myX += "/n";
        }
        document.write(myX);

      }
    </script>

  </body>
</html>
