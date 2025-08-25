window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'none';
});

const nav = document.querySelector('nav');
const dropdown = document.querySelector('.dropdown');

function menu(v) {
  if (v == 'ab') {
    dropdown.style.setProperty('max-height','100%')
    dropdown.style.setProperty('padding','1.25rem 2rem')
    
  }
  else {
    dropdown.style.setProperty('max-height','0')
    dropdown.style.setProperty('padding','0 2rem')

  }
}