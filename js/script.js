/*

  Title: Avita Sleep Calculator
  Program Summary: This program asks the user for their age and their last
  7 nights of sleep. It compares the user's average sleep to an age-based
  recommendation, displays a chart, gives advice, and lets the user run again.

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
Summary: Outputs the program title to the console.
@params: None
@return: None
*/
function titleAvita() {
  // function variable declarations
  const asciiTitle = String.raw`
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
    } // end of character colour if
  } // end of ascii title loop

  console.log(titleOutput);
} // end of titleAvita function



/*
Summary: Welcomes the user in an alert, console, and HTML.
@params: userNameFinal (String)
@return: None
*/
function welcomeAvita(userNameFinal) {
  // function variable declarations
  let welcomeElement = document.getElementById("username");
  // end of function variable declarations

  alert(`Welcome "${userNameFinal}", to Avita Sleep Calculator!`);
  console.log(`Welcome "${userNameFinal}", to Avita Sleep Calculator!`);
  welcomeElement.innerHTML = userNameFinal;
} // end of welcomeAvita function



/*
Summary: Logs a clearer introduction to the console.
@params: None
@return: None
*/
function introAvita() {
  console.log("%cWelcome to the Avita Sleep Debt Calculator", "color: turquoise; font-size: 30px");
  console.log("This program will ask you for your age and 7 sleep values, then it will calculate your average sleep, weekly sleep difference, chart, and recommendation.");
  console.log("%cIntroduction", "color: turquoise; font-size: 20px");
  console.log("Sleep is one of the foundations of health. Small sleep problems can build up into sleep debt, so this calculator helps you check your week and see what habit could improve next.");
} // end of introAvita function



/*
Summary: Explains the prompt instructions and expected outputs.
@params: None
@return: None
*/
function explanationAvita() {
  // function variable declarations
  let instructions = "Follow the popups to use the calculator.\n\n" +
    "1. Enter your age.\n" +
    "2. Enter 7 sleep values separated by commas, like 7,8,6,5,9,7,8.\n" +
    "3. Confirm your data.\n\n" +
    "You will get your average sleep, recommended sleep, daily difference, weekly difference, a console graph, a webpage chart, and a recommendation.";
  // end of function variable declarations

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
function askForSleep(userNameFinal) {
  // function variable declarations
  let userAge = "";
  let sleepHours = "";
  let lastSevenDays = getLastSevenDays();
  let detailedPrompt = lastSevenDays.map((dayName, dayIndex) => `Day ${dayIndex + 1} (${dayName})`).join("\n");
  // end of function variable declarations

  do {
    userAge = prompt("Enter your age:", "16");

    if (userAge === null) {
      if (confirm("Do you want to exit the program?")) {
        console.log("User exited the program while entering age.");
        return false;
      } // end of exit confirmation if
    } // end of null age if
  } while ((userAge === null) || (userAge.trim() === ""));

  do {
    sleepHours = prompt(`Enter sleep for each of the past 7 days:\n\n${detailedPrompt}\n\nExample: 7,8,6,5,9,7,8`, "7,8,6,5,9,7,8");

    if (sleepHours === null) {
      if (confirm("Do you want to exit the program?")) {
        console.log("User exited the program while entering sleep hours.");
        return false;
      } // end of exit confirmation if
    } // end of null sleep if
  } while ((sleepHours === null) || (sleepHours.trim() === ""));

  return sleepHandler(userAge, sleepHours, userNameFinal);
} // end of askForSleep function



/*
Summary: Validates inputs, finds recommended sleep, and starts calculations.
@params: ageInput (String), sleepInput (String), userNameFinal (String)
@return: Boolean - true if the user wants to run the calculator again.
*/
function sleepHandler(ageInput, sleepInput, userNameFinal) {
  // function variable declarations
  let ageNumber = Number(ageInput);
  let sleepData = [];
  let recommendedSleep = 0;
  let confirmMessage = "";
  // end of function variable declarations

  if (isNaN(ageNumber) || (ageInput.trim() === "")) {
    alert("The age you entered is not a number. Please try again.");
    return true;
  } else if ((ageNumber < 0) || (ageNumber > 120)) {
    alert("Please enter a realistic age between 0 and 120.");
    return true;
  } // end of age validation if

  recommendedSleep = getRecommendedSleep(ageNumber);
  sleepData = sleepInput.split(",");

  if (sleepData.length !== 7) {
    alert("Please enter exactly 7 numbers separated by commas.");
    return true;
  } // end of day amount validation if

  for (let sleepIndex = 0; sleepIndex < sleepData.length; sleepIndex++) {
    sleepData[sleepIndex] = Number(sleepData[sleepIndex].trim());

    if (isNaN(sleepData[sleepIndex])) {
      alert("Those sleep values are not all numbers. Each day must be a number.");
      return true;
    } else if ((sleepData[sleepIndex] < 0) || (sleepData[sleepIndex] > 24)) {
      alert("Each sleep value must be from 0 to 24 hours.");
      return true;
    } // end of sleep value validation if
  } // end of sleep validation loop

  confirmMessage = `Confirm your data:\nAge: ${ageNumber}\nBased on your age, the program recommends ${recommendedSleep} hours per night.\nSleep values: ${sleepData.join(", ")}`;
  console.log(`Age entered: ${ageNumber}`);
  console.log(`Based on the user's age, the program recommends ${recommendedSleep} hours per night.`);
  console.log(`Sleep values entered: ${sleepData.join(", ")}`);

  if (confirm(confirmMessage)) {
    calculateSleepDebt(sleepData, recommendedSleep, ageNumber, userNameFinal);
  } else if (confirm("Do you want to re-enter values?")) {
    console.log("User chose to re-enter the values.");
    return true;
  } else {
    console.log("User cancelled the confirmed data and ended the program.");
    return false;
  } // end of confirmation if

  return confirm("Do you want to run the sleep calculator again without reloading?");
} // end of sleepHandler function



/*
Summary: Returns the recommended sleep amount using age ranges.
@params: ageNumber (Number)
@return: Number - recommended hours of sleep per night.
*/
function getRecommendedSleep(ageNumber) {
  // function variable declarations
  const sleepAgeRanges = [
    { minimumAge: 0, maximumAge: 0, recommendedHours: 15, reason: "newborns need the most sleep for rapid brain and body growth" },
    { minimumAge: 1, maximumAge: 2, recommendedHours: 12, reason: "toddlers are still growing quickly and need extra recovery time" },
    { minimumAge: 3, maximumAge: 5, recommendedHours: 11, reason: "preschool children need sleep to support learning, mood, and growth" },
    { minimumAge: 6, maximumAge: 12, recommendedHours: 10, reason: "school age children need sleep for memory, attention, and physical growth" },
    { minimumAge: 13, maximumAge: 18, recommendedHours: 9, reason: "teenagers need more sleep because their brains and bodies are still developing" },
    { minimumAge: 19, maximumAge: 64, recommendedHours: 8, reason: "most adults need about 7 to 9 hours, so 8 hours is a healthy target" },
    { minimumAge: 65, maximumAge: 120, recommendedHours: 7.5, reason: "older adults usually need about 7 to 8 hours to stay rested" }
  ];
  let recommendedSleep = 8;
  // end of function variable declarations

  for (let ageRange of sleepAgeRanges) {
    if ((ageNumber >= ageRange.minimumAge) && (ageNumber <= ageRange.maximumAge)) {
      recommendedSleep = ageRange.recommendedHours;
    } // end of age range if
  } // end of age range loop

  return recommendedSleep;
} // end of getRecommendedSleep function



/*
Summary: Returns the research-style reason for an age recommendation.
@params: ageNumber (Number)
@return: String - explanation of why this age group needs that sleep.
*/
function getSleepReason(ageNumber) {
  // function variable declarations
  let sleepReason = "";
  // end of function variable declarations

  if (ageNumber < 1) {
    sleepReason = "Newborns need very high sleep because sleep supports fast brain and body development.";
  } else if (ageNumber <= 2) {
    sleepReason = "Toddlers need extra sleep because they are learning quickly and growing quickly.";
  } else if (ageNumber <= 5) {
    sleepReason = "Preschool children need sleep for growth, mood control, and learning.";
  } else if (ageNumber <= 12) {
    sleepReason = "School age children need sleep for attention, memory, and healthy growth.";
  } else if (ageNumber <= 18) {
    sleepReason = "Teenagers need about 8 to 10 hours because their brains and bodies are still developing.";
  } else if (ageNumber <= 64) {
    sleepReason = "Adults usually need 7 to 9 hours because sleep supports energy, focus, and long-term health.";
  } else {
    sleepReason = "Older adults usually need 7 to 8 hours because sleep still supports memory, mood, and body repair.";
  } // end of age reason if

  return sleepReason;
} // end of getSleepReason function



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
function formatDifference(sleepDifference) {
  // function variable declarations
  let absoluteDifference = Math.abs(sleepDifference).toFixed(2);
  let differenceMessage = "";
  // end of function variable declarations

  if (sleepDifference < 0) {
    differenceMessage = `${absoluteDifference} hours below recommendation`;
  } else if (sleepDifference > 0) {
    differenceMessage = `${absoluteDifference} hours above recommendation`;
  } else {
    differenceMessage = "exactly on the recommendation";
  } // end of difference if

  return differenceMessage;
} // end of formatDifference function



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
function consoleResults(averageSleep, recommendedSleep, sleepDifference, weeklyDifference, sleepStatus, sleepReason) {
  console.log("%c-------------------- FINAL RESULTS --------------------", "color: turquoise; font-weight: bold");
  console.log(`You slept for an average of ${averageSleep.toFixed(2)} hours per night.`);
  console.log(`Your recommended sleep is ${recommendedSleep} hours per night.`);
  console.log(`Based on this information, you are ${formatDifference(sleepDifference)} per night.`);
  console.log(`Over a week, that is ${formatDifference(weeklyDifference)} total.`);
  console.log(`Status: ${sleepStatus}`);
  console.log(`Recommendation explanation: ${sleepReason}`);
} // end of consoleResults function



/*
Summary: Determines and displays advice based on sleep difference.
@params: sleepDifference (Number)
@return: None
*/
function sleepAdvice(sleepDifference) {
  // function variable declarations
  let adviceGiven = "";
  let adviceBox = document.getElementById("BoxAdvice");
  let htmlAdvice = "";
  // end of function variable declarations

  if (isNaN(sleepDifference)) {
    adviceGiven = "The program could not make a recommendation because the sleep difference was invalid.";
  } else if (sleepDifference <= -2) {
    adviceGiven = "You are severely sleep deprived.\n\n" +
      "- Try going to bed 1-2 hours earlier consistently.\n" +
      "- Avoid screens 30-60 minutes before bed.\n" +
      "- Keep a consistent sleep schedule, even on weekends.\n" +
      "- Limit caffeine after midday.\n" +
      "- If this continues, consider talking to a doctor.";
  } else if ((sleepDifference > -2) && (sleepDifference < 0)) {
    adviceGiven = "You are slightly sleep deprived.\n\n" +
      "- Try going to bed 30-60 minutes earlier.\n" +
      "- Set a consistent bedtime and wake-up time.\n" +
      "- Avoid late-night scrolling or gaming.\n" +
      "- Make sure your room is dark and quiet.";
  } else if ((sleepDifference >= 0) && (sleepDifference <= 1)) {
    adviceGiven = "Your sleep amount is in the healthy range. Good job!\n\n" +
      "- Keep your current routine consistent.\n" +
      "- Maintain good sleep habits.\n" +
      "- Try to wake up and sleep at the same time daily.";
  } else if ((sleepDifference > 1) && (sleepDifference <= 2)) {
    adviceGiven = "You may be sleeping slightly too much.\n\n" +
      "- Try setting a consistent wake-up time.\n" +
      "- Avoid long naps during the day.\n" +
      "- Make sure you are staying active during the day.";
  } else if (sleepDifference > 2) {
    adviceGiven = "You may be oversleeping consistently.\n\n" +
      "- Try reducing sleep gradually.\n" +
      "- Stay physically active during the day.\n" +
      "- Avoid staying in bed when you are already awake.\n" +
      "- If you still feel tired, it could be worth checking with a doctor.";
  } else {
    adviceGiven = "The program could not make a recommendation because the sleep difference was invalid.";
  } // end of advice if

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
function endRound() {
  // function variable declarations
  let thankYouMessage = "Thanks for using the Avita Sleep Calculator!\n\n" +
    "Visit Avita Health & Wellness again for support with healthy routines, wellness services, and better sleep habits.";
  // end of function variable declarations

  alert(thankYouMessage);
  console.log("%c==================== PROGRAM ENDED ====================", "color: turquoise; font-weight: bold");
  console.log(thankYouMessage);
} // end of endRound function



/*
Summary: Prints a console graph with a legend.
@params: daysArray (Array), recommendedSleep (Number)
@return: None
*/
function consoleSleepGraph(daysArray, recommendedSleep) {
  // function variable declarations
  const dayNames = getLastSevenDays();
  const sleepScale = 2;
  const sleepAverage = calculateAverage(daysArray);
  let averageBar = "";
  let recommendedBar = "";
  let sleepBar = "";
  // end of function variable declarations

  console.log("%c-------------------- CONSOLE SLEEP GRAPH --------------------", "color: turquoise; font-weight: bold");
  console.log("Legend: green/red bars = daily sleep, orange bar = average sleep, blue bar = recommended sleep.");

  for (let dayIndex = 0; dayIndex < daysArray.length; dayIndex++) {
    sleepBar = "";

    for (let barIndex = 0; barIndex < daysArray[dayIndex] * sleepScale; barIndex++) {
      sleepBar += "#";
    } // end of daily bar loop

    console.log(
      `%c${dayNames[dayIndex]} Daily Sleep %c${sleepBar} (${daysArray[dayIndex]}h)`,
      "color:white",
      daysArray[dayIndex] < recommendedSleep ? "color:tomato" : "color:limegreen"
    );
  } // end of daily graph loop

  for (let averageIndex = 0; averageIndex < sleepAverage * sleepScale; averageIndex++) {
    averageBar += "#";
  } // end of average bar loop

  console.log(
    `%cAverage Sleep %c${averageBar} (${sleepAverage.toFixed(2)}h)`,
    "color:white",
    "color:orange; font-weight:bold"
  );

  for (let recommendedIndex = 0; recommendedIndex < recommendedSleep * sleepScale; recommendedIndex++) {
    recommendedBar += "#";
  } // end of recommended bar loop

  console.log(
    `%cRecommended Sleep %c${recommendedBar} (${recommendedSleep}h)`,
    "color:white",
    "color:dodgerblue; font-weight:bold"
  );
} // end of consoleSleepGraph function



/*
Summary: Renders the webpage chart with labels and a legend.
@params: daysArray (Array), recommendedSleep (Number)
@return: None
*/
function renderSleepChart(daysArray, recommendedSleep) {
  // function variable declarations
  const canvasElement = document.getElementById("graph");
  const canvasContext = canvasElement.getContext("2d");
  const dayNames = getLastSevenDays();
  const averageSleep = calculateAverage(daysArray);
  // end of function variable declarations

  if (canvasElement.sleepChartInstance) {
    canvasElement.sleepChartInstance.destroy();
  } // end of old chart if

  canvasElement.sleepChartInstance = new Chart(canvasContext, {
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
          label: "Average Sleep",
          data: new Array(7).fill(averageSleep),
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
          label: "Recommended Sleep",
          data: new Array(7).fill(recommendedSleep),
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
} // end of renderSleepChart function



/*
Summary: Calculates the names of the last 7 days, excluding today.
@params: None
@return: Array of Strings
*/
function getLastSevenDays() {
  // function variable declarations
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let daysResult = [];
  let todaysDate = new Date();
  let previousDate;
  // end of function variable declarations

  for (let dayCount = 7; dayCount >= 1; dayCount--) {
    previousDate = new Date(todaysDate);
    previousDate.setDate(todaysDate.getDate() - dayCount);
    daysResult.push(daysOfWeek[previousDate.getDay()]);
  } // end of date loop

  return daysResult;
} // end of getLastSevenDays function



/*
Summary: Calculates the arithmetic average of a numeric array.
@params: numberList (Array)
@return: Number
*/
function calculateAverage(numberList) {
  // function variable declarations
  let sleepSum = 0;
  // end of function variable declarations

  if (numberList.length === 0) {
    return 0;
  } // end of empty array if

  for (let sleepValue of numberList) {
    sleepSum += Number(sleepValue);
  } // end of sum loop

  return sleepSum / numberList.length;
} // end of calculateAverage function



/*
Summary: Capitalizes the first letter of a string.
@params: userText (String)
@return: String
*/
function capitalizeFirstLetter(userText) {
  if (!userText) {
    return "";
  } // end of empty text if

  return userText.charAt(0).toUpperCase() + userText.slice(1).toLowerCase();
} // end of capitalizeFirstLetter function



/*
Summary: Gets the user's name with prompt validation.
@params: None
@return: String
*/
function getUsername() {
  // function variable declarations
  let userName = prompt("What is your name?", "John Vatougios");
  let userNameCapitalized = "";
  let validNamePattern = /^[A-Za-z ]+$/;
  // end of function variable declarations

  while ((userName !== null) && ((userName.trim() === "") || (!validNamePattern.test(userName.trim())))) {
    userName = prompt("Please enter a name using letters and spaces only:", "John Vatougios");
  } // end of name validation loop

  if (userName === null) {
    userNameCapitalized = "Mr. Vatougios";
  } else {
    userNameCapitalized = userName.trim().split(" ").map(capitalizeFirstLetter).join(" ");

    if (!confirm(`Your name is "${userNameCapitalized}"?`)) {
      userNameCapitalized = "Mr. Vatougios";
      alert("Username set to default.");
    } // end of name confirmation if
  } // end of name selection if

  return userNameCapitalized;
} // end of getUsername function



// ================= END OF FUNCTIONS =================



// ================= BEGINNING OF PROGRAM =================

// Global Variable Declaration
// None.

window.addEventListener("load", function() {
  // This event listener waits until the HTML, CSS, images, and canvas have loaded.
  // The function inside is the program's main starting point.
  setTimeout(function() {
    sleepGame();
  }, 500);
}); // end of window load event listener

// ================= END OF PROGRAM =================
