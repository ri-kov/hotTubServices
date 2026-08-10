const modCustomSelect = document.getElementById("modConditionSelect");
const modTrigger = modCustomSelect.querySelector(".mod_select_trigger");
const modSelectedText = modCustomSelect.querySelector(".mod_selected_text");
const modOptions = modCustomSelect.querySelectorAll(".mod_select_options li");
const modHiddenInput = document.getElementById("modSelServ");

modTrigger.addEventListener("click", () => {
  modCustomSelect.classList.toggle("exp");
});

modOptions.forEach(option => {
  option.addEventListener("click", () => {
    modSelectedText.textContent = option.textContent;
    modSelectedText.classList.add("selected_service");
    modHiddenInput.value = option.dataset.value;
    modSelectedText.style.color = 'var(--bs-body-color)';
    modSelectedText.style.fontWeight = '450';
    modSelectedText.style.fontSize = '1rem';

    modOptions.forEach(item => item.classList.remove("selected"));
    option.classList.add("selected");

    modCustomSelect.classList.remove("exp");
  });
});

document.addEventListener("click", event => {
  if (!modCustomSelect.contains(event.target)) {
    modCustomSelect.classList.remove("exp");
  }
});

const dateButton = document.getElementById("dateButton");
const calendar = document.getElementById("calendar");

dateButton.addEventListener("click", function () {
    calendar.classList.toggle("open");
});

document.addEventListener("click", function() {
    if (!calendar.contains(event.target) && !dateButton.contains(event.target)) {
        calendar.classList.remove("open");
    }
});

const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const nextMonth = document.getElementById("nextMonth");
const prevMonth = document.getElementById("prevMonth");
const selectedDate = document.getElementById("selectedDate");
const customSelect = document.getElementById("conditionSelect");
const selectedText = customSelect.querySelector(".selected_text");
const options = customSelect.querySelectorAll(".select_options li");
const trigger = customSelect.querySelector(".select_trigger");
const hiddenInput = document.getElementById("selServ");
let currentDate = new Date();

function renderCalendar() {
    calendarDays.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month+1, 0);

    const firstWeekday = firstDayOfMonth.getDay();
    const numberOfDays = lastDayOfMonth.getDate();

    monthYear.textContent = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    for (let i = 0; i < firstWeekday; i++) {
        const emptySpace = document.createElement("div");
        calendarDays.appendChild(emptySpace);
    }

    for (let day = 1; day <= numberOfDays; day++) {
        const dayButton = document.createElement("button");
        dayButton.type = "button";
        dayButton.textContent = day;

        dayButton.addEventListener("click", function() {
            trigger.classList.add("enabled");
            selectedText.textContent = "Select time";
            selectedText.classList.remove("selected_service");
            options.forEach(option => {
                option.classList.remove("selected");
            })

            const previouslySelected = document.querySelector(".calendar_day.selected");
            if (previouslySelected) {
                previouslySelected.classList.remove("selected");
            }

            dayButton.classList.add("selected");

            const selectedFullDate = new Date(year, month, day);
            selectedDate.textContent = selectedFullDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            });
            selectedDate.classList.add("has_date");

            const timeSlots = document.querySelectorAll(".book_time_options");
            if (selectedFullDate.getDay() == 1 || selectedFullDate.getDay() == 2 || selectedFullDate.getDay() == 3 || selectedFullDate.getDay() == 4 || selectedFullDate.getDay() == 5) {
                function disableTimeSlots () {
                    timeSlots.forEach(element => {
                        element.classList.add("weekday_dis");
                    })
                }
                disableTimeSlots();
            } else {
                function enableTimeSlots () {
                    timeSlots.forEach(element => {
                        element.classList.remove("weekday_dis");
                    })
                }
                enableTimeSlots();
            }
        });

        dayButton.classList.add("calendar_day");
        calendarDays.appendChild(dayButton);
    }
}

renderCalendar();

nextMonth.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);

    renderCalendar();
})

prevMonth.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);

    renderCalendar();
})

trigger.addEventListener("click", () => {
    if (!trigger.classList.contains("enabled")) {
        alert("Please select a date first");
    } else {
        customSelect.classList.toggle("exp");
    }
});

options.forEach(option => {
    option.addEventListener("click", () => {
    selectedText.textContent = option.textContent;
    selectedText.classList.add("selected_service");
    hiddenInput.value = option.dataset.value;
    //selectedText.style.color = 'var(--bs-body-color)';
    //selectedText.style.fontWeight = '450';
    //selectedText.style.fontSize = '1rem';

    options.forEach(item => item.classList.remove("selected"));
    option.classList.add("selected");

    customSelect.classList.remove("exp");
  });
});

document.addEventListener("click", event => {
    if (!customSelect.contains(event.target)) {
        customSelect.classList.remove("exp");
    }
});

const textarea = document.getElementById("formAdditional");
const charCount = document.getElementById("charactersCount");

textarea.addEventListener("input", () => {
    charCount.textContent = `${textarea.value.length}/500`;
})