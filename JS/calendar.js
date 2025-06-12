function generateCalendar(year, month) {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    var calendarBody = document.getElementById("calendar-body");
    var calendarTable = document.getElementById("calendar-table");
    var headerMonth = document.getElementById("current-month");
    headerMonth.innerHTML = getMonthName(month) + " " + year;
    calendarBody.innerHTML = '';

    var month_text = month + 1;
    if(month < 10) {
        month++;
        month_text = "0" + month;
    }
    
    var events_array = [];
    for(var index in jsonEvents) {
        events_array[jsonEvents[index].eventDate] = jsonEvents[index];
    }

    var day = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                var cell = document.createElement("td");
                cell.innerHTML = '';
                row.appendChild(cell);
            } else if (day > daysInMonth) {
                break;
            } else {
                var cell = document.createElement("td");
                var day_text = day;
                if(day < 10) {
                    day_text = "0"+day;
                }
                var key_name = year+"-"+month_text+"-"+day_text;
                if(events_array[key_name] !== undefined){
                    var event_data = events_array[key_name];
                    // Convert the object to a query string
                    var queryString = objectToQueryString(event_data);

                    // Construct the URL with the query string
                    var url = '../../includes/php/Event.php?' + queryString;

                    cell.innerHTML = "<a href='"+url+"'>"+day+"</a>";
                    cell.classList.add("my_event");
                } else {
                    cell.innerHTML = day;
                }

                if (day === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()+1) {
                    cell.classList.add("today");
                }
                row.appendChild(cell);
                day++;
            }
        }
        calendarBody.appendChild(row);
    }
}

function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
}

function getMonthName(month) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentYear--;
        currentMonth = 11;
    }
    generateCalendar(currentYear, currentMonth);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentYear++;
        currentMonth = 0;
    }
    generateCalendar(currentYear, currentMonth);
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();

generateCalendar(currentYear, currentMonth);

function validateAndSave() {
    // Retrieve event data from the form
    var eventName = document.getElementById('eventName').value;
    var carManufacturer = document.getElementById('carManufacturer').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventTime = document.getElementById('eventTime').value;
    var eventPlace = document.getElementById('eventPlace').value;
  
    var currentDate = new Date();
    var selectedDate = new Date(eventDate);
    var eventTimeHours = parseInt(eventTime.split(":")[0], 10);
    var eventTimeMinutes = parseInt(eventTime.split(":")[1], 10); // Extract minutes as well
    var containsNumber = /\d/.test(eventPlace);
    
    // 3 Validations for the data
    // Date is Valid
    if (selectedDate < currentDate) {
        alert("Please select a date in the future.");
        event.preventDefault(); // Prevent form submission
        return;
    } else if (eventTimeHours < 8 || (eventTimeHours === 16 && eventTimeMinutes > 0) || eventTimeHours > 16) {
        alert("The selected time must be between 8:00 AM and 4:00 PM");
        event.preventDefault(); // Prevent form submission
        return;
    } else if (containsNumber) {
        alert("Event place cannot contain numbers");
        event.preventDefault(); // Prevent form submission
        return;
    } else {
        saveToDatabase(eventName, carManufacturer, eventDate, eventTime, eventPlace);
    }
}

function saveToDatabase(eventName, carManufacturer, eventDate, eventTime, eventPlace) {
    
    console.log("Event saved to the database.");
}


