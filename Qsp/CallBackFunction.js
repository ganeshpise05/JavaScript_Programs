/* 1.	*Callback Function (Morning Alarm)*:  
   Write a function setAlarm that takes a callback function. Print “Alarm set for 7 AM.” Then, use the callback to print a wake-up message like “Time to wake up!” when the alarm goes off.  
   *Example*:  
   javascript
   setAlarm(wakeUp); // “Time to wake up!”    */
   
   function setAlarm(callback) {
    console.log("Alarm set for 7 AM.");
    callback();
  }
  
  function wakeUp() {
    console.log("Time to wake up!");
  }
  
  setAlarm(wakeUp);
  
   console.log("--------------");
   

   
/* 2.	*Callback Function (Order Groceries Online)*:  
   Create a function placeGroceryOrder that accepts a callback. Print “Order placed for groceries.” Then, use the callback to notify when the groceries are delivered.  
   *Example*:  
   javascript
   placeGroceryOrder(deliveryNotification); // “Your groceries have arrived!”    */
   
   console.log("--------------");

/* 3.	*Callback Function (Cook Dinner)*:  
   Write a function startCooking that takes a callback function. Print “Dinner is cooking…”. Afterward, call the callback to announce when the meal is ready.  
   *Example*:  
   javascript
   startCooking(dinnerReady); // “Dinner is ready!”    */
   
   console.log("--------------");

/* 4.	*Callback Function (Exercise Routine)*:  
   Create a function startExercise that accepts a callback. First, print “Starting workout…”. Then, call the callback to notify when the workout is completed.  
   *Example*:  
   javascript
   startExercise(completeWorkout); // “Workout completed!”    */
   
   console.log("--------------");

/* 5.	*Callback Function (Charge Your Phone)*:  
   Write a function chargePhone that accepts a callback. Print “Charging phone…”. Once it’s done charging, use the callback to print “Phone fully charged.”  
   *Example*:  
   javascript
   chargePhone(fullCharge); // “Phone fully charged!”    */
   
   console.log("--------------");

/* 6.	*Callback Function (Laundry)*:  
   Create a function startLaundry that takes a callback. First, print “Laundry started…”. After the cycle completes, use the callback to notify “Laundry done!”.  
   *Example*:  
   javascript
   startLaundry(laundryDone); // “Laundry done!”    */
   
   console.log("--------------");

/* 7.	*Callback Function (Send an Email)*:  
   Write a function sendEmail that accepts a callback. Print “Sending email…”. After the email is sent, call the callback to print “Email sent successfully!”.  
   *Example*:  
   javascript
   sendEmail(emailSent); // “Email sent successfully!”    */
   
   console.log("--------------");

/* 8.	*Callback Function (Start a Zoom Meeting)*:  
   Create a function startMeeting that takes a callback function. Print “Zoom meeting starting…”. After that, use the callback to notify when the meeting has started.  
   *Example*:  
   javascript
   startMeeting(meetingStarted); // “Meeting has started!”    */
   
   console.log("--------------");

/* 9.	*Callback Function (Car Service Reminder)*:  
   Write a function carService that accepts a callback. Print “Car service scheduled…”. Once the car service is complete, call the callback to notify “Car service complete.”  
   *Example*:  
   javascript
   carService(serviceComplete); // “Car service complete.”     */
   
   console.log("--------------");

/* 10.	*Callback Function (Coffee Break)*:  
    Create a function brewCoffee that accepts a callback. Print “Brewing coffee…”. After the coffee is brewed, call the callback to notify “Coffee is ready!”.  
    *Example*:  
    javascript
    brewCoffee(coffeeReady); // “Coffee is ready!”  */



    console.log("--------------");