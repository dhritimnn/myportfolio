// Declaring Variables
let totalChapters = 92;
let totalDays = 98;
let startingDate = '2025-09-16';




// Accessing Variables
let inpt = document.querySelectorAll('input');
let btn = document.querySelector('button');
let localData = localStorage.getItem('study');
let parseData = JSON.parse(localData)




// Fetching Data
function fetchingItems() {
   if (localData == null) {
      localStorage.setItem('study', JSON.stringify(['', '', '', '', '', '', '', '', '', '', '', '']));
   }
   else {
      for (let i = 0; i != inpt.length; i++) {
         let each = inpt[i]
         each.value = parseData[i]
      }
   }
}
fetchingItems()




// Calculations 
function doneChaptersCalculationAlg() {
   // redeclaration 
   let localData = localStorage.getItem('study');
   let parseData = JSON.parse(localData)


   let data = parseData;
   let val = '';
   for (var i = 0; i != data.length; i++) {
      val += '+' + `0${data[i]}`
   }
   let dd = eval(val)
   return dd;
}



function countdownAlg() {
   let d1 = new Date(startingDate)
   let d2 = new Date();
   const diffTime = Math.abs(d1 - d2);
   const diffDays = Math.ceil(diffTime / (24 * 60 * 60 * 1000))
   return diffDays;
}




// Implanting Data
function implant() {
   let totalChaptersDoc = [...document.getElementsByClassName('totalchapters')];
   let remainingDaysDoc = [...document.getElementsByClassName('days')];
   let dateDoc = [...document.getElementsByClassName('date')];
   let doneChaptersDoc = [...document.getElementsByClassName('donechapters')];
   let progressRateDoc = [...document.getElementsByClassName('rate')];

let doneChapters = doneChaptersCalculationAlg()
let countdown = countdownAlg();

   
   totalChaptersDoc.forEach(
      function(e) {
         e.innerHTML = `${totalChapters}`;
      }
   );
   
   remainingDaysDoc.forEach(
      function(e) {
         e.innerHTML = countdown + `&nbsp;&nbsp; (${totalDays-countdown} days remaining)`;
      }
   );
   
   dateDoc.forEach(
      function(e) {
         e.innerHTML = `${totalDays} days`;
      }
   );
   
   doneChaptersDoc.forEach(
      function(e) {
         e.innerHTML = doneChapters;
      }
   );
   progressRateDoc.forEach(
      function(e) {
         e.innerHTML = parseInt((doneChapters / (countdown / totalDays * 100)) * 100);
      }
   );
   
   
}
implant()

function resetInpt() {
   let obj = [];
   for (let i = 0; i != inpt.length; i++) {
      x = inpt[i]
      obj.push(x.value)
      localStorage.setItem('study', JSON.stringify(obj))
   }
}




// Events
btn.addEventListener('click', () => {
   resetInpt();
   implant()
})