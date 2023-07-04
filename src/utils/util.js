const data = new Date();
const dayWeeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const getCurrentData = () => {
    let day = String(data.getDate()).padStart(2, '0');
    let year = data.getFullYear();

    const mounts = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let mount = mounts[data.getMonth()];

    let currentDay = dayWeeks[data.getDay() - 1];
    let currentData = `${currentDay},${day} ${mount} ${year}`;
    return currentData;
};

const getWeeksForForecast = (number) => {
    let currentDay = dayWeeks[data.getDay() - 1 + number];
    return currentDay
}


const getCurrentTime = () => {
    let hour = String(data.getHours()).padStart(2, '0');
    let minutes = String(data.getMinutes()).padStart(2, '0');
    let currentTime = `${hour}:${minutes}`;
    return currentTime;
};

const getDateForDay = (thisDay) => {
    let day = String(data.getDate() + thisDay).padStart(2, '0');
    let month = String(data.getMonth() + 1).padStart(2, '0');
    let year = data.getFullYear();

    const receivedDay = `${year}-${month}-${day}`

    return receivedDay
}


export default {
    getCurrentData,
    getCurrentTime,
    getDateForDay,
    getWeeksForForecast
};