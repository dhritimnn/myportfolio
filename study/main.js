let totalChapters=92;
let totalDays=98;
let startingDate= '2025-09-16';






let inpt = document.querySelectorAll('input');
let btn = document.querySelector('button');
if (localStorage.getItem('study') == null) {
   localStorage.setItem('study', JSON.stringify(['', '', '', '', '', '', '', '', '', '', '', '']))
}
else {
   for (let i = 0; i != 12; i++) {
      let gt = localStorage.getItem('study')
      let each = inpt[i]
      each.value = JSON.parse(gt)[i]
   }
}

function calc(a) {
   let val = '';
   for (var i = 0; i != a.length; i++) {
      val += '+' + `0${a[i]}`
   }
   let dd = eval(val)
   return dd;
}

function countdown() {
   let d1 = new Date(startingDate)
   let d2 = new Date();
   const diffTime = Math.abs(d1 - d2);
   const diffDays = Math.ceil(diffTime / (24 * 60 * 60 * 1000))
   return diffDays;
}

function basics() {
   // Tab to edit
   document.getElementById('days').innerHTML = countdown() + `&nbsp;&nbsp; (${totalDays-countdown()} days remaining)`;
   
   document.getElementById('date').innerHTML = `${totalDays} days`;
   
   document.getElementById('totalchapters').innerHTML = totalChapters;
   
   document.getElementById('donechapters').innerHTML = calc(JSON.parse(localStorage.getItem('study')));
   
   document.getElementById('rate').innerHTML = parseInt(((calc(JSON.parse(localStorage.getItem('study')))/countdown())/(totalChapters/totalDays))*100);
}
basics()
btn.addEventListener('click', () => {
   let obj = [];
   for (let i = 0; i != 12; i++) {
      x = inpt[i]
      obj.push(x.value)
      localStorage.setItem('study', JSON.stringify(obj))
   }
   basics()
})