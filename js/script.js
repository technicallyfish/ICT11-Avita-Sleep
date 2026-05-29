/*

/* 

	Title: Avita Sleep Debt Calculator
	Program Summary: We answer the question "Will you die from your horrible sleep schedule?" and give you some adivce on how to not do that actually
	
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
	
	Version (Project Iteration): 3.0 (resubmission)
	
	Date (Last Edited): 03/29/2026

  Important Program Elements Used:
  prompt(), alert(), confirm(), defaultValue, functions, callbacks,
  higher-order functions, parameters, .slice(), .trim(), .toLowerCase(),
  while loop, do while loop, for loop, for of loop, Canvas API / Chart.js,
  increment (++), arrays, comparison operators, DOM, event listeners,
  innerHTML, function scope, if / else if / else, ternary, objects,
  object literals, and regex.

  Authors: Amelie (Ruohan) Shen, Leo Hougaard, Isaac Leon Calderon
  Version: 2.1 (Rubric Fixes)
  Date Last Edited: 05/16/2026

*/



// ================= START OF FUNCTIONS =================



/*
Summary: Runs the full sleep calculator program and lets the user repeat it.
@params: None
@return: None
*/
function sleepGame() {
  // function variable declarations
  let userWantsToRunAgain = false;
  let userNameFinal = getUsername();
  // end of function variable declarations

  titleAvita();
  welcomeAvita(userNameFinal);
  introAvita();
  explanationAvita();
  thankYouSleep();
} //End of master function

  do {
    console.log("%c==================== NEW SLEEP CHECK ====================", "color: turquoise; font-weight: bold");
    userWantsToRunAgain = askForSleep(userNameFinal);

    if (userWantsToRunAgain) {
      console.log("%c-------------------- RESTARTING PROGRAM --------------------", "color: turquoise");
    } // end of repeat message if
  } while (userWantsToRunAgain);

  endRound();
} // end of sleepGame function



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
  const asciiTitleColors = [36];
  let titleColorIndex = 0;
  let titleOutput = "";
  let titleColor = asciiTitleColors[titleColorIndex % asciiTitleColors.length];
  // end of function variable declarations

  for (let asciiTitleCharacter of asciiTitle) {
    if ((asciiTitleCharacter === "\n") || (asciiTitleCharacter === " ")) {
      titleOutput += asciiTitleCharacter;
    } else {
      titleOutput += `\x1b[${titleColor}m${asciiTitleCharacter}\x1b[0m`;
      titleColorIndex++;
    } // End of ASCII character type check
  } // End of ASCII Title colouring



  console.log(titleOutput);
} // end of titleAvita function



/*
Summary: The welcome Avita function
@parms: var name or expression and datatype
@return: None - Triggers alerts and logs to greet the user.
*/
function welcomeAvita(userNameFinal) {
  alert(`Welcome ${userNameFinal} to the Avita Sleep Debt Calculator! We will help you check your sleep health.`);
  console.log(`Welcome ${userNameFinal} to the Avita Sleep Debt Calculator! We will help you check your sleep health.`);
} //End of welcome Avita function


  alert(`Welcome "${userNameFinal}", to Avita Sleep Calculator!`);
  console.log(`Welcome "${userNameFinal}", to Avita Sleep Calculator!`);
  welcomeElement.innerHTML = userNameFinal;
} // end of welcomeAvita function



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
  alert(`The sleep calculator.\n\nFollow the popups and prompts to calculate your sleep debt:\n1. Enter your age.\n2. Enter 7 sleep values for the past week, separated by commas.\n3. Receive your average sleep, recommended sleep, sleep debt, a chart summary, and advice.`);
  alert('Let\'s start!');
  consoleDivider();
  console.log('%cExplanation', 'color: turquoise; font-size: 20px');
  console.log(`The sleep calculator.\n\nFollow the popups and prompts to calculate your sleep debt:\n1. Enter your age.\n2. Enter 7 sleep values for the past week, separated by commas.\n3. Receive your average sleep, recommended sleep, sleep debt, a chart summary, and advice.`);
} // End of explanation Avita function


  console.log("%cExplanation", "color: turquoise; font-size: 20px");
  console.log(instructions);
  alert(instructions);
  alert("Let's start!");
} // end of explanationAvita function



/*
Summary: Asks for age and sleep data, then sends the information to validation.
@params: userNameFinal (String)
@return: Boolean - true if the user wants to run the calculator again.
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
    sleepHours = prompt(`Enter sleep for each of the past 7 days:\n\n${detailedPrompt}\n\nExample: 7,8,6,5,9,7,8`, "7,8,6,5,9,7,8");

    if (sleepHours === null) {
      if (confirm("Do you want to exit the program?")) {
        console.log("User has exited the program at the entering sleep hours step.")
        return;
      } // End of sleep hours exit confirmation
    } // End of cancelled sleep hours check
  } while((sleepHours === null) || (sleepHours.trim() === "")); // End of sleep hours input loop



  sleepHandler(userAge, sleepHours);
} //End of sleep input

  return sleepHandler(userAge, sleepHours, userNameFinal);
} // end of askForSleep function



/*
Summary: Validates inputs, finds recommended sleep, and starts calculations.
@params: ageInput (String), sleepInput (String), userNameFinal (String)
@return: Boolean - true if the user wants to run the calculator again.
*/
function sleepHandler(ageInput, sleepInput) {



  // function var
  // format = age: recommended sleep hours
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
  let recommendedSleep = 0;
  let confirmMessage = "";
  // end of function variable declarations

  if (isNaN(ageNumber) || (ageInput.trim() === "")) {
    alert("The age you entered is not a number. Please try again.");
    return true;
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
  } else {
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


  return confirm("Do you want to run the sleep calculator again without reloading?");
} // end of sleepHandler function



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

  sleepDifferenceMessage = sleepDifference === 0 ? "exactly the recommended amount" : `${Math.abs(sleepDifference).toFixed(2)} hours ${sleepDifference < 0 ? "less" : "more"} than recommended each night`;
  weeklyDifferenceMessage = sleepDifference === 0 ? "exactly the recommended amount" : `${Math.abs(sleepDifference * 7).toFixed(2)} hours ${sleepDifference < 0 ? "less" : "more"} than recommended`;

  resultMessage =`Results:<br><br>You slept for an average of ${averageSleep.toFixed(2)} hours per night.<br><br>Your recommended sleep is ${recommendedSleep} hours per night.<br>${ageSleepExplanation}<br><br>Based on this information, you are sleeping ${sleepDifferenceMessage}.<br>Your weekly sleep difference is ${weeklyDifferenceMessage}.<br>`;

  alertMessage =`Results:\n\nYou slept for an average of ${averageSleep.toFixed(2)} hours per night.\n\nYour recommended sleep is ${recommendedSleep} hours per night.\n${ageSleepExplanation}\n\nBased on this information, you are sleeping ${sleepDifferenceMessage}.\nYour weekly sleep difference is ${weeklyDifferenceMessage}.`;
  


  consoleDivider();
  console.log(alertMessage);


/*
Summary: Calculates average sleep and displays all results.
@params: sleepData (Array), recommendedSleep (Number), ageNumber (Number), userNameFinal (String)
@return: None
*/
function calculateSleepDebt(sleepData, recommendedSleep, ageNumber, userNameFinal) {
  // function variable declarations
  let averageSleep = calculateAverage(sleepData);
  let sleepDifference = averageSleep - recommendedSleep;
  let weeklyDifference = sleepDifference * 7;
  let sleepStatus = getSleepStatus(sleepDifference);
  let sleepReason = getSleepReason(ageNumber);
  let resultMessage = "";
  let alertMessage = "";
  // end of function variable declarations

  resultMessage =
    `<b>Results for ${userNameFinal}</b><br>` +
    `You slept for an average of <b>${averageSleep.toFixed(2)} hours</b> per night.<br>` +
    `Your recommended sleep is <b>${recommendedSleep} hours</b> per night.<br>` +
    `Based on this information, you are <b>${formatDifference(sleepDifference)}</b> per night.<br>` +
    `Over a week, that is <b>${formatDifference(weeklyDifference)}</b> total.<br><br>` +
    `<b>Why this recommendation?</b><br>${sleepReason}`;

  alertMessage =
    `Results for ${userNameFinal}\n\n` +
    `You slept for an average of ${averageSleep.toFixed(2)} hours per night.\n` +
    `Your recommended sleep is ${recommendedSleep} hours per night.\n` +
    `Based on this information, you are ${formatDifference(sleepDifference)} per night.\n` +
    `Over a week, that is ${formatDifference(weeklyDifference)} total.\n\n` +
    `Status: ${sleepStatus}\n\n` +
    `Why this recommendation?\n${sleepReason}`;

  document.getElementById("BoxResult").innerHTML = resultMessage;
  consoleResults(averageSleep, recommendedSleep, sleepDifference, weeklyDifference, sleepStatus, sleepReason);
  consoleSleepGraph(sleepData, recommendedSleep);
  renderSleepChart(sleepData, recommendedSleep);
  alert(alertMessage);
  sleepAdvice(sleepDifference);
} // end of calculateSleepDebt function



/*
Summary: Creates a readable statement for sleep differences.
@params: sleepDifference (Number)
@return: String
*/
function sleepAdvice(sleepDiff) {



  // function var
  let adviceGiven;
  let adviceBox = document.getElementById("BoxAdvice");
  let htmlAdvice;
  // end of function var
  
  

  if ((isNaN(sleepDiff)) || ((sleepDiff < -24)) || ((sleepDiff > 24))) {
    adviceGiven = "Error: sleep difference could not be interpreted correctly.";
  } else if (sleepDiff < -2) {
    adviceGiven = "You are severely sleep deprived.\n\n" + "• Try going to bed 1-2 hours earlier consistently\n" + "• Avoid screens (phone, computer) 30-60 minutes before bed\n" +"• Keep a consistent sleep schedule (even on weekends)\n" + "• Limit caffeine after midday\n" + "• If this continues, consider talking to a doctor";
  } else if (sleepDiff < 0) {
    adviceGiven = "You are slightly sleep deprived.\n\n" + "• Try going to bed 30-60 minutes earlier\n" + "• Set a consistent bedtime and wake-up time\n" + "• Avoid late-night scrolling or gaming\n" + "• Make sure your room is dark and quiet";
  } else if (sleepDiff <= 1) {
    adviceGiven = "Your sleep amount is in the healthy range. Good job!\n\n" + "• Keep your current routine consistent\n" + "• Maintain good sleep habits (dark room, no screens before bed)\n" + "• Try to wake up and sleep at the same time daily";
  } else if (sleepDiff <= 2) {
    adviceGiven = "You may be sleeping slightly too much.\n\n" + "• Try setting a consistent wake-up time\n" + "• Avoid long naps during the day\n" + "• Make sure you're staying active during the day\n" + "• Oversleeping occasionally is fine, but watch for patterns";
  } else {
    adviceGiven = "You may be oversleeping consistently.\n\n" + "• Try reducing sleep gradually (15-30 minutes earlier wake-up)\n" + "• Stay physically active during the day\n" + "• Avoid staying in bed when you're already awake\n" + "• If you still feel tired, it could be worth checking with a doctor";
  } // End of sleep advice decider if



  htmlAdvice = adviceGiven.replace(/\n/g, "<br>");
  adviceBox.innerHTML = `<b>Recommendation:</b><br><br>${htmlAdvice}`;

  alert("Recommendation:\n\n" + adviceGiven);
  consoleDivider("Recommendation");
  console.log("%cRecommendation", "color: turquoise; font-size:20px");
  console.log(adviceGiven);


/*
Summary: Returns a short status based on the sleep difference.
@params: sleepDifference (Number)
@return: String
*/
function getSleepStatus(sleepDifference) {
  // function variable declarations
  let sleepStatus = "";
  // end of function variable declarations

  if (isNaN(sleepDifference)) {
    sleepStatus = "unable to classify because the sleep difference was invalid";
  } else if (sleepDifference <= -2) {
    sleepStatus = "severely sleep deprived";
  } else if ((sleepDifference > -2) && (sleepDifference < 0)) {
    sleepStatus = "slightly sleep deprived";
  } else if ((sleepDifference >= 0) && (sleepDifference <= 1)) {
    sleepStatus = "in a healthy range";
  } else if ((sleepDifference > 1) && (sleepDifference <= 2)) {
    sleepStatus = "slightly above the recommendation";
  } else if (sleepDifference > 2) {
    sleepStatus = "far above the recommendation";
  } else {
    sleepStatus = "unable to classify because the sleep difference was invalid";
  } // end of status if

  return sleepStatus;
} // end of getSleepStatus function



/*
Summary: Logs the final result statements clearly.
@params: averageSleep, recommendedSleep, sleepDifference, weeklyDifference, sleepStatus, sleepReason
@return: None
*/
function displayFinalResults(finalResultHTML) {



  // function var
  let resultBox;
  // end of function var



  resultBox = document.getElementById("BoxResult");
  resultBox.innerHTML = finalResultHTML;
} //End of displayFinalResults funtion

  htmlAdvice = adviceGiven.replace(/\n/g, "<br>");
  adviceBox.innerHTML = `<b>Recommendation:</b><br>${htmlAdvice}`;

  alert("Recommendation:\n" + adviceGiven);
  console.log("%cRecommendation", "color: turquoise; font-size:20px");
  console.log(adviceGiven);
} // end of sleepAdvice function



/*
Summary: Ends the program with a business-style thank you message.
@params: None
@return: None
*/
function thankYouSleep() {
  alert("Thanks for using Avita Sleep Debt Calculator. Be sure to Visit Avita Health & Wellness, any time you want to improve the quality of your life, and come back the next time you need to assess your sleep.");
  console.log('%cThanks for using Avita Sleep Debt Calculator. Be sure to Visit Avita Health & Wellness, any time you want to improve the quality of your life, and come back the next time you need to assess your sleep.', 'color: #3399FF');

  
  do {
    askForSleep();
  } while (confirm("Do you want to calculate sleep debt again from the beginning?")); // End of repeat calculator loop



} //End of thankYouSleep funtion


  alert(thankYouMessage);
  console.log("%c==================== PROGRAM ENDED ====================", "color: turquoise; font-weight: bold");
  console.log(thankYouMessage);
} // end of endRound function



/*
Summary: Prints a console graph with a legend.
@params: daysArray (Array), recommendedSleep (Number)
@return: None
*/
function consoleSleepGraph(daysArray, recommendedHours) {



  // function var
  const dayNames = getLast7Days();;
  const sleepScale = 2; // characters per hour

  const sleepAverage = calculateAverage(daysArray);
  let averageBar = "";
  let recommendedBar = "";
  let sleepBar = "";
  // end of function variable declarations

  let avgBar = "";
  let recBar = "";
  let currentDay;
  let currentBar;
  let barIndex;
  let averageIndex;
  let recommendedIndex;

  // end of function var



  consoleDivider();
  console.log("%cSleep Graph (Last 7 Days)", "color: turquoise; font-size:20px");
  console.log("%cLegend: %cGreen = daily sleep, %cOrange = average sleep, %cBlue = recommended sleep", "color:turquoise; font-weight:bold", "color:limegreen", "color:orange", "color:dodgerblue");



  // Daily bars
  for (currentDay = 0; currentDay < daysArray.length; currentDay++) {
    currentBar = "";



    for (barIndex = 0; barIndex < daysArray[currentDay] * sleepScale; barIndex++) {
      currentBar += "█";
    } // End of daily bar creation loop



    console.log(
      `%c${dayNames[currentDay]} %c${currentBar} (${daysArray[currentDay]}h)`,
      "color:turquoise",
      "color:limegreen"
    );
  } // End of daily sleep graph loop



  // Average bar
  for (averageIndex = 0; averageIndex < sleepAverage * sleepScale; averageIndex++) {
    avgBar += "█";
  } // End of average bar creation loop



  // Recommended bar
  for (recommendedIndex = 0; recommendedIndex < recommendedHours * sleepScale; recommendedIndex++) {
    recBar += "█";
  } // End of recommended bar creation loop



  // log avg and rec bars
  console.log(`%cAVG %c${avgBar} (${sleepAverage.toFixed(2)}h)`, "color:turquoise", "color:orange; font-weight:bold");
  console.log(`%cREC %c${recBar} (${recommendedHours}h)`, "color:turquoise", "color:dodgerblue; font-weight:bold");
} // End of consoleSleepGraph function





/*
Summary: Renders the webpage chart with labels and a legend.
@params: daysArray (Array), recommendedSleep (Number)
@return: None
*/
function renderSleepChart(daysArray, recommendedHours) {



  // function var
  const ctx = document.getElementById("graph").getContext("2d");
  const dayNames = getLast7Days();
  const averageSleepHours = calculateAverage(daysArray); 
  // end of function var



  if (window.sleepChart) {
    window.sleepChart.destroy();
    console.log("Loading new sleep chart.");
  } else {
    console.log("Loading sleep chart.");
  } // End of previous chart check



  window.sleepChart = new Chart(ctx, {
    data: {
      labels: dayNames,
      datasets: [
        {
          type: "bar",
          label: "Daily Sleep (red = below recommendation, green = meets recommendation)",
          data: daysArray,
          backgroundColor: daysArray.map((sleepHours) => sleepHours < recommendedSleep ? "rgb(231, 45, 58)" : "rgb(46, 203, 46)"),
          borderRadius: 8,
          order: 2
        },
        {
          type: "line",
          label: "Average",
          data: new Array(7).fill(averageSleepHours),
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
        {
          type: "line",
          label: "Recommended",
          data: new Array(7).fill(recommendedHours),
          borderColor: "dodgerblue",
          borderWidth: 4,
          borderDash: [6, 6],
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
          text: "Sleep Graph: Daily Sleep, Average Sleep, and Recommended Sleep",
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
            text: "Hours of Sleep",
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
Summary: Calculates the names of the last 7 days, excluding today.
@params: None
@return: Array of Strings
*/
function getLast7Days() {



  // start of function var
  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let daysResult = [];
  let todaysDate = new Date();
  let tempDate;
  let currentIndex;
  // end of function var



  for(currentIndex = 7; currentIndex >= 1; currentIndex--) {  // skips today cuz you've prob not slept yet if you're using this website
    tempDate = new Date(todaysDate);

    tempDate.setDate(todaysDate.getDate() - currentIndex);

    daysResult.push(daysOfWeek[tempDate.getDay()]);
  } //End of last 7 days array creation for loop



  return daysResult;
} // end of getLastSevenDays function



/*
Summary: Calculates the arithmetic average of all numeric values in a given array
@parms: sleepValuesArray (Array of Numbers)
@return: Number — the average of the array, or 0 if the array is empty
*/
function calculateAverage(sleepValuesArray) {
  
  
  
  // start of function var
  let sleepSum = 0;
  let sleepIndex;
  // end of function var



  if (sleepValuesArray.length === 0) {
    return 0;
  } // End of empty sleep values check



  // Add each sleep value to the total sleep sum
  for (sleepIndex = 0; sleepIndex < sleepValuesArray.length; sleepIndex++) {
    sleepSum += Number(sleepValuesArray[sleepIndex]);
  } // End of sleep sum loop



  return sleepSum / sleepValuesArray.length;
}; //End of calculateAverage function

  for (let sleepValue of numberList) {
    sleepSum += Number(sleepValue);
  } // end of sum loop

  return sleepSum / numberList.length;
} // end of calculateAverage function



/*
Summary: Capitalize First Letter Function 
@parms: nameString (String)
@return:String — Returns the input string with the first character capitalized
*/
function capitalizeFirstLetter(nameString) { 



  if (!nameString) {
    return '';
  } else {
    console.log("capitalization complete")
  } // end of if name empty check



  return nameString.charAt(0).toUpperCase() + nameString.slice(1); 
} // End of Capitalize First Letter Function


  return userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
} // end of capitalizeFirstLetter function



/*
Summary: Gets the user's name with prompt validation.
@params: None
@return: String
*/
function getUsername() {

  

  // start of function var
  let userName = prompt("What is your name?");
  let userNameCapitalized;
  let usernameElement = document.getElementById("username");
  // end of function var

  

  while ((userName !== null) && ((userName.trim() === "") || (!validNamePattern.test(userName.trim())))) {
    userName = prompt("Please enter a name using letters and spaces only:", "John Vatougios");
  } // end of name validation loop



  if (userName === null) {
    userNameCapitalized = "Mr. Vatougios";
  } else {
    userNameCapitalized = userName.trim().split(" ").map(capitalizeFirstLetter).join(" ");



    // confirm AFTER formatting
    if (!confirm(`Your name is "${userNameCapitalized}"?`)) {
      userNameCapitalized = "Mr. Vatougios";
      alert("Username set to default.");
    } else {
      alert("Username set to entered name.");
    } // End of username confirmation check



  } // End of username default check
  


  usernameElement.innerHTML = userNameCapitalized;
  return userNameCapitalized;
} // end of getUsername function



// ================= END OF FUNCTIONS =================



// ================= BEGINNING OF PROGRAM =================



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
