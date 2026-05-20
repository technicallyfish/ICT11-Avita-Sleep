
/* 

	Title: Sleep
	Program Summary: We answer the question "Will you die from your horrible sleep schedule?"
	
	Important (KEY) Program Elements Used: 

  prompt(), alert(), and confirm()
  defaultValue (for prompts)
  functions
  function callback
  higher-order functions
  parameters
  .slice()
  .trim()
  .toLowerCase()
  while loop
  do while loop
  for loop
  for of loop
  ctx/graph (Canvas API)
  increment (++)
  decrement (--)
  arrays
  comparison Operators (!, ===, ||, &&)
  DOM & event listeners
  inner HTML
  function scope
  if/if else/if else if else...
  ternary
  objects
  object literals
  regex 


	Authors (Teammates/Owners/Project Roles): Amelie (Ruohan) Shen, Leo Hougaard, Isaac Leon Calderon
	
	Version (Project Iteration): 2.0 (Submission)
	
	Date (Last Edited): 03/29/2026

*/





// ================= START OF FUNCTIONS =================





/*
Summary: program master function
@parms: None
@return: None
*/
function sleepGame() {
  titleAvita();
  welcomeAvita(getUsername());
  introAvita();
  explanationAvita();
  endRound();
} //End of master function





/*
Summary: Prints a clear section divider in the console
@parms: sectionTitle (String)
@return: None
*/
function consoleDivider() {
  console.log(`\n-------------------------------------------------`);
} // End of consoleDivider function




/*
Summary: The title function
@parms: var name or expression and datatype
@return: None - Outputs the ASCII title to the console.
*/
function titleAvita() {
  // function var
  const ASCIITitle = String.raw`                                                                             
  ▄████▄ ▄▄ ▄▄ ▄▄ ▄▄▄▄▄▄ ▄▄▄    ██     ██ ▄▄▄▄▄ ▄▄    ▄▄    ▄▄  ▄▄ ▄▄▄▄▄  ▄▄▄▄  ▄▄▄▄ 
  ██▄▄██ ██▄██ ██   ██  ██▀██   ██ ▄█▄ ██ ██▄▄  ██    ██    ███▄██ ██▄▄  ███▄▄ ███▄▄ 
  ██  ██  ▀█▀  ██   ██  ██▀██    ▀██▀██▀  ██▄▄▄ ██▄▄▄ ██▄▄▄ ██ ▀██ ██▄▄▄ ▄▄██▀ ▄▄██▀                                                                                    
                              
    ()___  
  ()//__/)_________________()
  ||(___)//#/_/#/_/#/_/#()/||
  ||----|#| |#|_|#|_|#|_|| ||
  ||____|_|#|_|#|_|#|_|#||/||
  ||    |#|_|#|_|#|_|#|_||                                                      
                                                                                                                                                  
  ▄█████ ▄▄    ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄    ▄█████  ▄▄▄  ▄▄     ▄▄▄▄ ▄▄ ▄▄ ▄▄     ▄▄▄ ▄▄▄▄▄▄ ▄▄▄  ▄▄▄▄  
  ▀▀▀▄▄▄ ██    ██▄▄  ██▄▄  ██▄█▀   ██     ██▀██ ██    ██▀▀▀ ██ ██ ██    ██▀██  ██  ██▀██ ██▄█▄ 
  █████▀ ██▄▄▄ ██▄▄▄ ██▄▄▄ ██      ▀█████ ██▀██ ██▄▄▄ ▀████ ▀███▀ ██▄▄▄ ██▀██  ██  ▀███▀ ██ ██ 
  `;                                                                                                 
  let asciiTitleColors = [36]; // cyan
  let titleColorIndex = 0;
  let asciiTitleChar;
  let titleOutput = "";
  const titleColor = asciiTitleColors[titleColorIndex % asciiTitleColors.length];
  // end of function var



  // ASCII Title colouring (DO NOT TOUCH)
  for (asciiTitleChar of ASCIITitle) {
    if (asciiTitleChar === "\n") {
      titleOutput += asciiTitleChar; // preserve line breaks
    } else if (asciiTitleChar === " ") {
      titleOutput += asciiTitleChar; // preserve spaces
    } else {
      titleOutput += `\x1b[${titleColor}m${asciiTitleChar}\x1b[0m`;
      titleColorIndex++;
    } // End of ASCII character type check
  } // End of ASCII Title colouring

  console.log(titleOutput);
} // End of the title function





/*
Summary: The welcome Avita function
@parms: var name or expression and datatype
@return: None - Triggers alerts and logs to greet the user.
*/
function welcomeAvita(userNameFinal) {
  alert(`Welcome ${userNameFinal} to the Avita Sleep Debt Calculator!`);
  console.log(`Welcome ${userNameFinal} to the Avita Sleep Debt Calculator!`);
} //End of welcome Avita function





/*
Summary: Intro Avita function
@parms: var name or expression and datatyp
@return: None - Logs stylized introduction text to the console.
*/
function introAvita() {
  consoleDivider();
  console.log('%cWelcome to Avita sleep debt calculator.', 'color: turquoise; font-size: 30px');
  console.log('This is where you will be enlightened about your sleep!');
  console.log('%cIntroduction', 'color: turquoise; font-size: 20px');
  console.log(`Sleep, something that most of us take for granted, is a fundamental cornerstone for our health. Therefore, improving your sleep has ubiquitous positive impacts on your tomorrow but, more importantly, to the rest of your life as well. This compounding effect means that minor inconsistencies to your sleep can cause vast deterioration of your health. This is why you should check your sleep debt with our sleep debt calculator, so that you find out if your sleep schedule is perfect or you can find out how to make vast improvements without doing vast amounts of additional work if it's not.`);
} //End of intro Avita function





/*
Summary: Explanation Avita function
@parms: var name or expression and datatyp
@return: None - Displays game instructions via alerts and logs.
*/
function explanationAvita() {
  consoleDivider();
  console.log('%cExplanation', 'color: turquoise; font-size: 20px');
  alert(`The sleep calculator.\n\nFollow the popups and prompts to calculate your sleep debt:\n1. Enter your age.\n2. Enter 7 sleep values for the past week, separated by commas.\n3. Receive your average sleep, recommended sleep, sleep debt, a chart summary, and advice.`);
  alert('Let\'s start!');
  console.log(`The sleep calculator.\n\nFollow the popups and prompts to calculate your sleep debt:\n1. Enter your age.\n2. Enter 7 sleep values for the past week, separated by commas.\n3. Receive your average sleep, recommended sleep, sleep debt, a chart summary, and advice.`);
} // End of explanation Avita function





/*
Summary: Prompts the user for their age and sleep hours for the past 7 days, validates that inputs are not empty or cancelled, then passes the values to sleepHandler
@parms: None
@return: None — Returns early if user chooses to exit
*/
function askForSleep() {
  // function var
  let userAge;
  let sleepHours;

  let last7Days = getLast7Days();
  let detailedPrompt = last7Days.map((day, i) => `Day ${i+1} (${day})`).join("\n");
  // end of function var



  do {
    userAge = prompt("Enter your age:", "16");
    
    if (userAge === null) {
      if (confirm("Do you want to exit the program?")) {
        console.log("User has exited the program at the entering user age step.")
        return;
      } // End of age exit confirmation
    } // End of cancelled age check
  } while((userAge === null) || (userAge.trim() === "")); // End of age input loop

  do {
    sleepHours = prompt(`Enter sleep for each of the past 7 days:\n\n${detailedPrompt}\n\nex. 7,8,6,5,9,7,8`, "1,2,3,4,5,6,7");

    if (sleepHours === null) {
      if (confirm("Do you want to exit the program?")) {
        console.log("User has exited the program at the entering sleep hours step.")
        return;
      } // End of sleep hours exit confirmation
    } // End of cancelled sleep hours check
  } while((sleepHours === null) || (sleepHours.trim() === "")); // End of sleep hours input loop

  sleepHandler(userAge, sleepHours);

} //End of sleep input




/*
Summary: Validates age and sleep inputs, assigns recommended sleep based on age, and triggers sleep debt calculation
@parms: ageInput (String — age entered by user), sleepInput (String — comma-separated sleep hours)
@return: returns undefined early on failure; otherwise, initiates the next function
*/
function sleepHandler(ageInput, sleepInput) {
  // function var
  // age: recommended sleep hours
  const ageSleepMapping = {
      0: 15,
      1: 14,
      2: 12,
      3: 11,
      4: 11,
      5: 10.5,
      6: 10,
      7: 10,
      8: 9.5,
      9: 9.5,
      10: 9.5,
      11: 9.5,
      12: 9,
      13: 9,
      14: 9,
      15: 8.5,
      16: 8.5,
      17: 8.5,
      18: 8.5
  };
  let ageNumber = Number(ageInput);
  let sleepData = [];
  let recommendedSleep;
  let confirmMessage;
  // end of function var



  if (isNaN(ageNumber)) {
    alert("The age you tried to enter is not a number.");
    alert("Please enter a number between 0 and 120 for your age.");
    askForSleep();
    return;
  } else if ((ageNumber < 0) || (ageNumber > 120)) {
    alert("The age you tried to enter is not a realistic age.");
    alert("Please enter a valid age between 0 and 120.");
    askForSleep();
    return;
  } //End of age check
    
  // Set recommended sleep based on ageNumber
  if (ageSleepMapping[ageNumber] !== undefined) {
    recommendedSleep = ageSleepMapping[ageNumber];
  } else if (ageNumber <= 64) {
    recommendedSleep = 8;
  } else {
    recommendedSleep = 7.5;
  } //End of sleep time selection

  sleepData = sleepInput.split(","); // convert sleep string into array

  // check there are exactly 7 days
  if (sleepData.length !== 7) {
    alert("Please enter exactly 7 numbers separated by commas.");
    askForSleep();
    return;
  } //End of day amount check

  // Convert each day to number and validate
  for (let i = 0; i < sleepData.length; i++) {
    sleepData[i] = Number(sleepData[i].trim());
    if (isNaN(sleepData[i])) {
      alert("Those sleep values are not all numbers.");
      alert("Each day must be a number.");
      askForSleep();
      return;
    } else if (sleepData[i] < 0) {
      alert("Sleep hours cannot be negative.");
      alert("Each day must be a number from 0-24.");
      askForSleep();
      return;
    } else if (sleepData[i] > 24) {
      alert("You can't sleep more than 24 hours in a day.");
      alert("Each day must be a number from 0-24.");
      askForSleep();
      return;
    } // End of single sleep value check
  } //End of sleep length check

  confirmMessage =`Confirm your data:\nAge: ${ageNumber}\nSleep (7 days): ${sleepData.join(", ")}\nYour recommended sleep will be calculated from your age.`;
  console.log(`You entered:\nAge: ${ageNumber}\nSleep (7 days): ${sleepData.join(", ")}\nYour recommended sleep was calculated from your age.`);
  if (confirm(confirmMessage)) {
    calculateSleepDebt(sleepData, recommendedSleep, ageNumber);
  } else if (confirm("Do you want to re enter values?")) {
    console.log("User has cancelled the first prompt but decided to try again.");
    askForSleep();
  } else {
    console.log("User has canceled the prompt.");
    return;
  } // End of data confirmation check
} //End of sleepHandler funtion





/*
Summary: Gives a short research-based explanation for why each age group needs its recommended sleep amount
@parms: ageNumber (Number)
@return: String - Explanation for the user's age group
*/
function getAgeSleepExplanation(ageNumber) {
  // function var
  let ageExplanation;
  // end of function var



  switch (ageNumber) {

    case (ageNumber <= 2):

      ageExplanation = "This amount of sleep is needed to support rapid brain growth, physical development, and immune function in babies and toddlers.";
      break;
      
    case (ageNumber <= 5):

      ageExplanation = "This amount of sleep is needed to support learning, emotional control, growth, and healthy preschool development.";
      break;
      
    case (ageNumber <= 12):

      ageExplanation = "This amount of sleep is needed to support attention, memory, school performance, and physical development in children.";
      break;

    case (ageNumber <= 18):

      ageExplanation = "This amount of sleep is needed to support memory, mood, attention, and major body and brain development during adolescence.";
      break;

    case (ageNumber <= 64):

      ageExplanation = "This amount of sleep is needed to support immune function, memory, stress recovery, and daily energy in adults.";
      break;

    default:

      ageExplanation = "This amount of sleep is needed to support memory, balance, immune health, and overall wellness in older adults.";
      break;

  } // End of age explanation selection

  return ageExplanation;
} // End of getAgeSleepExplanation function





/*
Summary: Calculates the average sleep, daily, weekely, and the sleep difference compred to de recommended. Displays the results DOM renders the chart and trigers sleep advice.
@parms: SleepData
@return: none
*/
function calculateSleepDebt(sleepData, recommendedSleep, ageNumber) {
  // function var
  let resultMessage;
  let alertMessage;
  let sleepDifference;
  let averageSleep = calculateAverage(sleepData);
  let finalResultHTML;
  let sleepDifferenceMessage;
  let weeklyDifferenceMessage;
  let ageSleepExplanation = getAgeSleepExplanation(ageNumber);
  // end of function var
  

  sleepDifference = averageSleep - recommendedSleep;

  consoleDivider();

  sleepDifferenceMessage = sleepDifference === 0 ? "exactly the recommended amount" : `${Math.abs(sleepDifference).toFixed(2)} hours ${sleepDifference < 0 ? "less" : "more"} than recommended each night`;
  weeklyDifferenceMessage = sleepDifference === 0 ? "exactly the recommended amount" : `${Math.abs(sleepDifference * 7).toFixed(2)} hours ${sleepDifference < 0 ? "less" : "more"} than recommended`;

  resultMessage =`Results<br><br>You slept for an average of ${averageSleep.toFixed(2)} hours per night.<br>Your recommended sleep is ${recommendedSleep} hours per night.<br>${ageSleepExplanation}<br>Based on this information, you are sleeping ${sleepDifferenceMessage}.<br>Your weekly sleep difference is ${weeklyDifferenceMessage}.<br>`;

  alertMessage =`Results:\n\nYou slept for an average of ${averageSleep.toFixed(2)} hours per night.\nYour recommended sleep is ${recommendedSleep} hours per night.\n\n${ageSleepExplanation}\n\nBased on this information, you are sleeping ${sleepDifferenceMessage}.\nYour weekly sleep difference is ${weeklyDifferenceMessage}.`;
  console.log(alertMessage);

  finalResultHTML = resultMessage;
  document.getElementById("BoxResult").innerHTML = resultMessage;

  consoleSleepGraph(sleepData, recommendedSleep);
  renderSleepChart(sleepData, recommendedSleep);
  alert(alertMessage);

  sleepAdvice(sleepDifference);
  displayFinalResults(finalResultHTML);
} //End of calculateSleepDebt function





/*
Summary: Determines and displays a sleep recommendation message based on how far the user's average sleep is from the recommended amount
@parms: sleepDiff (Number — difference between average and recommended sleep)
@return: none
*/
function sleepAdvice(sleepDiff) {
  // function var
  let adviceGiven;
  let adviceBox = document.getElementById("BoxAdvice");
  let htmlAdvice;
  // end of function var
  
  

  if (isNaN(sleepDiff) || (sleepDiff < -24) || (sleepDiff > 24)) {
    adviceGiven = "Error: sleep difference could not be interpreted correctly.";
  } // End of sleep difference error check
  else if (sleepDiff < -2) {
    adviceGiven = "You are severely sleep deprived.\n\n" +
    "• Try going to bed 1-2 hours earlier consistently\n" +
    "• Avoid screens (phone, computer) 30-60 minutes before bed\n" +
    "• Keep a consistent sleep schedule (even on weekends)\n" +
    "• Limit caffeine after midday\n" +
    "• If this continues, consider talking to a doctor";
  } // End of severe sleep deprivation check
  else if (sleepDiff < 0) {
    adviceGiven = "You are slightly sleep deprived.\n\n" +
    "• Try going to bed 30-60 minutes earlier\n" +
    "• Set a consistent bedtime and wake-up time\n" +
    "• Avoid late-night scrolling or gaming\n" +
    "• Make sure your room is dark and quiet";
  } // End of slight sleep deprivation check
  else if (sleepDiff <= 1) {
    adviceGiven = "Your sleep amount is in the healthy range. Good job!\n\n" +
    "• Keep your current routine consistent\n" +
    "• Maintain good sleep habits (dark room, no screens before bed)\n" +
    "• Try to wake up and sleep at the same time daily";
  } // End of healthy sleep range check
  else if (sleepDiff <= 2) {
    adviceGiven = "You may be sleeping slightly too much.\n\n" +
    "• Try setting a consistent wake-up time\n" +
    "• Avoid long naps during the day\n" +
    "• Make sure you're staying active during the day\n" +
    "• Oversleeping occasionally is fine, but watch for patterns";
  } // End of slight oversleeping check
  else {
    adviceGiven = "You may be oversleeping consistently.\n\n" +
    "• Try reducing sleep gradually (15-30 minutes earlier wake-up)\n" +
    "• Stay physically active during the day\n" +
    "• Avoid staying in bed when you're already awake\n" +
    "• If you still feel tired, it could be worth checking with a doctor";
  } // End of major oversleeping check

  htmlAdvice = adviceGiven.replace(/\n/g, "<br>");
  adviceBox.innerHTML = `<b>Recommendation:</b><br>${htmlAdvice}`;

  alert("Recommendation:\n" + adviceGiven);
  consoleDivider("Recommendation");
  console.log("%cRecommendation", "color: turquoise; font-size:20px");
  console.log(adviceGiven);

} // End of sleepAdvice function





/*
Summary: Displays the final stored HTML result in the BoxResult element and logs a goodbye message to the console
@parms: none
@return: none
*/
function displayFinalResults(finalResultHTML) {
  // function var
  let resultBox;
  // end of function var



  resultBox = document.getElementById("BoxResult");
  resultBox.innerHTML = finalResultHTML;

  console.log('%cCome back the next time you need to calculate your sleep debt!', 'color: #3399FF');
} //End of displayFinalResults funtion





/*
Summary: Ends the program by showing a thank-you alert and displaying the final results
@parms: none
@return: none
*/
function endRound() {
  alert("Thanks for using Avita Sleep Debt Calculator. Be sure to Visit Avita Health & Wellness, any time you want to improve the quality of your life.");
  do {
    askForSleep();
  } while (confirm("Do you want to calculate sleep debt again?")); // End of repeat calculator loop
} //End of endRound funtion





/*
Summary: Prints a styled bar graph to the console showing daily sleep, average sleep, and recommended sleep using block characters
@parms: daysArray (Array of Numbers — sleep hours per day), recommended (Number — recommended hours)
@return: None
*/
function consoleSleepGraph(daysArray, recommended) {
  // function var
  const dayNames = getLast7Days();;
  const sleepScale = 2; // characters per hour

  const sleepAverage = calculateAverage(daysArray);

  let avgBar = "";
  let recBar = "";
  // end of function var



  consoleDivider();
  console.log("%cSleep Graph (Last 7 Days)", "color: turquoise; font-size:20px");
  console.log("%cLegend: %cGreen = daily sleep, %cOrange = average sleep, %cBlue = recommended sleep", "color:turquoise; font-weight:bold", "color:limegreen", "color:orange", "color:dodgerblue");

  // Daily bars
  for (let i = 0; i < daysArray.length; i++) {

    let bar = "";

    for (let j = 0; j < daysArray[i] * sleepScale; j++) {
      bar += "█";
    } // End of daily bar creation loop

    console.log(
      `%c${dayNames[i]} %c${bar} (${daysArray[i]}h)`,
      "color:turquoise",
      "color:limegreen"
    );
  } // End of daily sleep graph loop

  // Average bar
  for (let i = 0; i < sleepAverage * sleepScale; i++) {
    avgBar += "█";
  } // End of average bar creation loop

  console.log(
    `%cAVG %c${avgBar} (${sleepAverage.toFixed(2)}h)`,
    "color:turquoise",
    "color:orange; font-weight:bold"
  );

  // Recommended bar
  for (let i = 0; i < recommended * sleepScale; i++) {
    recBar += "█";
  } // End of recommended bar creation loop

  console.log(
    `%cREC %c${recBar} (${recommended}h)`,
    "color:turquoise",
    "color:dodgerblue; font-weight:bold"
  );

} // End of consoleSleepGraph function



/*
Summary:Renders an interactive Chart.js bar and line chart on the canvas element with ID "graph", showing daily sleep bars, an average line, and a recommended sleep line
@parms: daysArray (Array of Numbers — sleep hours per day), recommended (Number — recommended hours)
@return: None — Assigns the chart instance to window.sleepChart
*/
function renderSleepChart(daysArray, recommended) {
  // function var
  const ctx = document.getElementById("graph").getContext("2d");
  const dayNames = getLast7Days();
  const average = calculateAverage(daysArray);
  // end of function var



  if(window.sleepChart) {
    window.sleepChart.destroy();
  } // End of previous chart check

  window.sleepChart = new Chart(ctx, {
    data: {
      labels: dayNames,
      datasets: [

        // Daily bars (green)
        {
          type: "bar",
          label: "Daily Sleep",
          data: daysArray,
          backgroundColor: daysArray.map(h =>
            h < 7 ? "rgb(231, 45, 58)" : "rgb(46, 203, 46)"
          ),
          borderRadius: 8,
          order: 2
        },

        // Average line (orange)
        {
          type: "line",
          label: "Average",
          data: new Array(7).fill(average),
          borderColor: "orange",
          borderWidth: 4,
          tension: 0.4,
          fill: false,

          pointRadius: 4,
          pointBackgroundColor: "orange",
          pointBorderColor: "orange",
          pointBorderWidth: 0,

          order: 1
        },

        // Recommended line (blue)
        {
          type: "line",
          label: "Recommended",
          data: new Array(7).fill(recommended),
          borderColor: "dodgerblue",
          borderWidth: 4,
          borderDash: [6,6],
          tension: 0.4,
          fill: false,

          pointRadius: 4,
          pointBackgroundColor: "dodgerblue",
          pointBorderColor: "dodgerblue",
          pointBorderWidth: 0,

          order: 1
        }

      ]
    },

    options: {
      responsive: true,

      animation: {
        duration: 1000,
        easing: "easeOutQuart"
      },

      plugins: {
        title: {
          display: true,
          text: "Sleep Graph (Last 7 Days)",
          color: "white"
        },
        legend: {
          labels: {
            color: "white"
          }
        }
      },

      scales: {
        x: {
          ticks: {
            color: "white"
          },
          grid: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "white" 
          },
         title: {
            display: true,
            text: "Hours",
            color: "white"
          },
          grid: {
            color: "rgba(255,255,255,0.1)"
          }
        }
      }
    }
  });
} // End of renderSleepChart function





/*
Summary: Calculates the names of the last 7 days (excluding today) based on the user's system date
@parms: None
@return: Array of Strings — 7 abbreviated day names (e.g. ["Mon", "Tue", ...])
*/
function getLast7Days() {
  // start of function var
  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let daysResult = [];

  let todaysDate = new Date();
  // end of function var



  for(let i = 7; i >= 1; i--) {  // skips today
    let d = new Date(todaysDate);

    d.setDate(todaysDate.getDate() - i);

    daysResult.push(daysOfWeek[d.getDay()]);
  } //End of date loop

  return daysResult;
} //End of the getLast7Days function





/*
Summary: Calculates the arithmetic average of all numeric values in a given array
@parms: sleepValuesArray (Array of Numbers)
@return: Number — the average of the array, or 0 if the array is empty
*/
const calculateAverage = (sleepValuesArray) => {
  if (sleepValuesArray.length === 0) {
    return 0;
  } // End of empty sleep values check

  const sleepSum = sleepValuesArray.reduce((sum, value) => sum + Number(value), 0);

  return sleepSum / sleepValuesArray.length;
}; //End of calculateAverage function





/*
Summary: Capitalize First Letter Function 
@parms: nameString (String)
@return:String — Returns the input string with the first character capitalized
*/
const capitalizeFirstLetter = (nameString) => { 
  if (!nameString) {
    return '';
  } // End of empty name check

  return nameString.charAt(0).toUpperCase() + nameString.slice(1); 
} // End of Capitalize First Letter Function





/*
Summary: Gets username from the user via prompt, capitalizes it, confirms it, and updates the DOM element with id "username"
@parms: userName (String — raw input), userNameCapitalized (String — formatted name)
@return: None — Updates the global userNameCapitalized and the DOM
*/
function getUsername() {
  // start of function var
  let userName = prompt("What is your name?");
  let userNameCapitalized;
  let usernameElement = document.getElementById("username");
  // end of function var

  

  // keep reprompting if user gave empty/blank input
  while ((userName !== null) && (userName.trim() === "")) {
    userName = prompt("Please enter a name:");
  } // End of while user need to enter a name

  if (userName === null) {
    userNameCapitalized = "Mr. Vatougios";
  } else {
    userNameCapitalized = capitalizeFirstLetter(userName.trim());

    // confirm AFTER formatting
    if (!confirm(`Your name is "${userNameCapitalized}"?`)) {
      userNameCapitalized = "Mr. Vatougios";
      alert("Username set to default.");
    } // End of username confirmation check
  } // End of username default check
  
  usernameElement.innerHTML = userNameCapitalized;

  return userNameCapitalized;
} // End of assigning user name function





// ================= end of functions =================





// ================= START OF GLOBAL VAR ===============
//NONE
// ================ end of global var ==================





// ================= START OF PROGRAM ==================





window.addEventListener("load", function() {
  // WAITING 0.5 SECONDS (500 milliseconds) TO ENSURE HTML LOADS OKAY
  setTimeout(function() {
    // ================= START MAIN =================
    sleepGame(); 
    // ================= end of main =================
  }, 500);
});





// ================= end of program ===================





/* End of Program Notes
get use info()
> age
> amount of sleep on average over past week
> when sleep
> when wake

calculateDebt()
> call getUserInfo() or grab value from storage
> 

output()
> mortality rate
> recommmmmmended sleep amount (average)
> recommended sleep time & wake time
> sleep debt
> advice based on sleep debt and mortality rate
> 

---


Stuff to do

7 part ui ux
Confirmation not on html
Move everything into sleep function


*/
