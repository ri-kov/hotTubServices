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

const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

let currentDate = new Date();

function renderCalendar() {
    calendarDays.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, dateButton, 0);

    const firstWeekday = firstDayOfMonth.getDay();
    const numberOfDays = lastDayOfMonth.getDate();

    monthYear.textContent = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
    });

    for (let i = 0; i < numberOfDays; day++) {
        constdayButton = document.createElement("button");

        dayButton.type = "button";
        dayButton.textContent = day;
        dayButton.classList.appendChild(dayButton);
    }
}

renderCalendar();