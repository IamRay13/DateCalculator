
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Adjuster</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <input id="date" type="date" value="2024-10-21">
    <button id="add90">+90 days</button>
    <button id="subtract90">-90 days</button>
    <div id="calendar"></div>
    <div id="time"></div>
    <div id="month-date-year"></div>

    <script src="script.js"></script>
</body>
</html>
```

_script.js_
```
const dateInput = document.getElementById('date');
const add90Button = document.getElementById('add90');
const subtract90Button = document.getElementById('subtract90');
const calendarDiv = document.getElementById('calendar');
const timeDiv = document.getElementById('time');
const monthDateYearDiv = document.getElementById('month-date-year');

const updateCalendar = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    calendarDiv.textContent = date.toLocaleDateString('en-US', options);
};

const updateTime = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeDiv.textContent = now.toLocaleTimeString('en-US', options);
};

const updateMonthDateYear = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    monthDateYearDiv.textContent = date.toLocaleDateString('en-US', options);
};

const adjustDate = (days) => {
    const date = new Date(dateInput.valueAsDate);
    date.setDate(date.getDate() + days);
    dateInput.valueAsDate = date;
    updateCalendar(date);
    updateMonthDateYear(date);
};

dateInput.addEventListener('change', () => {
    const date = new Date(dateInput.valueAsDate);
    updateCalendar(date);
    updateMonthDateYear(date);
});

add90Button.addEventListener('click', () => adjustDate(90));
subtract90Button.addEventListener('click', () => adjustDate(-90));

setInterval(updateTime, 1000);
updateTime();

updateCalendar(new Date(dateInput.valueAsDate));
updateMonthDateYear(new Date(dateInput.valueAsDate));
```
