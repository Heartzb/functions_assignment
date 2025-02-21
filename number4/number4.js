function convertTo24HourFormat(timeStr) {
    let [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours, 10);

    if (modifier.toUpperCase() === "PM" && hours !== 12) {
        hours += 12;
    } else if (modifier.toUpperCase() === "AM" && hours === 12) {
        hours = 0;
    }

    return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function convertTime() {
    let inputTime = document.getElementById("timeInput").value;
    if (!inputTime.match(/^(\d{1,2}):(\d{2}) (AM|PM)$/i)) {
        document.getElementById("result").innerText = "Invalid format! Use hh:mm AM/PM";
        return;
    }
    let convertedTime = convertTo24HourFormat(inputTime);
    document.getElementById("result").innerText = `24-Hour Format: ${convertedTime}`;
}