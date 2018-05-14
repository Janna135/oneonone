//import Header from './Header.js'
//const header = new Header('[data-module-header]')

//Show the required page
const homeBtn = document.querySelector(".logo");
const notesBtn = document.querySelector(".notes");
const datesBtn = document.querySelector(".makedate");
const abstractBtn = document.querySelector(".abstract");

const homePg = document.querySelector(".page1");
const notesPg = document.querySelector(".page2");
const datePg = document.querySelector(".page3");
const abstractPg = document.querySelector(".page4");

const pages = Array.from(document.querySelectorAll(".page"));

homeBtn.addEventListener("click", e => show("page1"));
notesBtn.addEventListener("click", e => show("page2"));
datesBtn.addEventListener("click", e => show("page3"));
abstractBtn.addEventListener("click", e => show("page4"));

function show(className) {
  pages.forEach(page => {
    page.classList.contains(className)
      ? page.classList.remove("hidden")
      : page.classList.add("hidden");
  });
}

show("page1");

//page 2
const noteBtn = document.querySelector(".note");
const noteForm = document.querySelector(".note__form");

noteBtn.addEventListener("click", changeHidden);

function changeHidden() {
  noteBtn.classList.add("hidden");
  noteForm.classList.remove("hidden");
}

class Note {
  constructor(headline, note) {
    const headlineEl = document.querySelector('[placeholder="Überschrift"]');
    const noteEl = document.querySelector('[placeholder="Notiz"]');
    this.button = document.querySelector(".savenote");
    this.notes = loadData("notes") || [];
    this.notes.forEach(note => this.createNote(note.headline, note.note));

    this.button.addEventListener("click", event => {
      this.createNote(headlineEl.value, noteEl.value);
      saveData("notes", this.notes);
      headlineEl.value = "";
      noteEl.value = "";
    });
  }
  createNote(headline, note) {
    const htmlString = `<div class="note__items">
        <span class="note__headline">${headline}</span>
          <span> 
            ${note}
          </span>
        </div>`;
    this.notes = [...this.notes, { headline, note }];
    const placeholderEl = document.querySelector(".placeholder__notes");
    placeholderEl.insertAdjacentHTML("beforeend", htmlString);

    noteBtn.classList.remove("hidden");
    noteForm.classList.add("hidden");
  }
}

new Note();

//page 3
const dateBtn = document.querySelector("[data-date-btn]");
const dateForm = document.querySelector(".newdate");
const messageEl = document.querySelector(".date__message");

dateBtn.addEventListener("click", changeClass);

function changeClass() {
  dateBtn.classList.add("hidden");
  dateForm.classList.remove("hidden");
  messageEl.classList.add("hidden");
}

class Date {
  constructor(name, date, time) {
    const nameEl = document.querySelector(".datename");
    const dateEl = document.querySelector(".datedate");
    const timeEl = document.querySelector(".datetime");
    this.button = document.querySelector(".savedate");
    this.dates = loadData("dates") || [];

    this.dates.forEach(date => {
      console.log("date: ", date);
      this.createDate(date.name, date.date, date.time);
    });

    this.button.addEventListener("click", event => {
      this.createDate(nameEl.value, dateEl.value, timeEl.value);
      saveData("dates", this.dates);
      nameEl.value = "";
      dateEl.value = "";
      timeEl.value = "";
    });
  }
  createDate(name, date, time) {
    const htmlString = `<div class="main__items">
        <div>${name}</div>
        <div>${date}</div>
        <div>${time}</div>
        </div>`;
    this.dates = [...this.dates, { name, date, time }];
    const placeholderEl = document.querySelector(".placeholder__dates");
    placeholderEl.insertAdjacentHTML("afterbegin", htmlString);

    messageEl.classList.remove("hidden");
    dateBtn.classList.remove("hidden");
    dateForm.classList.add("hidden");
  }
}
new Date();

//page 4
const studentBtn = document.querySelector(".student");
const studentForm = document.querySelector(".newstudent");

studentBtn.addEventListener("click", changeStudent);

function changeStudent() {
  studentBtn.classList.add("hidden");
  studentForm.classList.remove("hidden");
}

class Student {
  constructor(name) {
    const nameEl = document.querySelector(".studentname");
    this.button = document.querySelector(".savestudent");
    this.students = loadData("students") || [];
    this.students.forEach(student => this.createStudent(student.name));

    this.button.addEventListener("click", event => {
      this.createStudent(nameEl.value);
      saveData("students", this.students);
      nameEl.value = "";
    });
  }
  createStudent(name) {
    const htmlString = `<div class="main__items">${name}</div>`;
    const placeholderEl = document.querySelector(".placeholder__student");
    this.students = [...this.students, { name }];
    placeholderEl.insertAdjacentHTML("beforeend", htmlString);

    studentBtn.classList.remove("hidden");
    studentForm.classList.add("hidden");
  }
}

new Student();

function loadData(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
