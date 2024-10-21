document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const add90Button = document.getElementById('add90');
    const subtract90Button = document.getElementById('subtract90');
    const calendarDiv = document.getElementById('calendar');
    const timeDiv = document.getElementById('time');

    const updateCalendar = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        calendarDiv.textContent = date.toLocaleDateString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3');
    };

    const updateTime = () => {
        const now = new Date();
        const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        timeDiv.textContent = now.toLocaleTimeString('en-US', options);
    };
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const add90Button = document.getElementById('add90');
    const subtract90Button = document.getElementById('subtract90');
    const calendarDiv = document.getElementById('calendar');
    const timeDiv = document.getElementById('time');

    const updateCalendar = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        calendarDiv.textContent = date.toLocaleDateString('en-US', options).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3');
    };

    const updateTime = () => {
        const now = new Date();
        const options = { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        timeDiv.textContent = now.toLocaleTimeString('en-US', options);
    };

    const adjustDate = (days) => {
        const date = new Date(dateInput.value);
        date.setDate(date.getDate() + days);
        dateInput.valueAsDate = date;
        updateCalendar(date);
    };

    dateInput.addEventListener('change', () => {
        const date = new Date(dateInput.value);
        updateCalendar(date);
    });

    add90Button.addEventListener('click', () => adjustDate(90));
    subtract90Button.addEventListener('click', () => adjustDate(-90));

    setInterval(updateTime, 1000);
    updateTime();
});


    const adjustDate = (days) => {
        const date = new Date(dateInput.value);
        date.setDate(date.getDate() + days);
        dateInput.valueAsDate = date;
        updateCalendar(date);
    };

    dateInput.addEventListener('change', () => {
        const date = new Date(dateInput.value);
        updateCalendar(date);
    });

    add90Button.addEventListener('click', () => adjustDate(90));
    subtract90Button.addEventListener('click', () => adjustDate(-90));

    setInterval(updateTime, 1000);
    updateTime();
});
