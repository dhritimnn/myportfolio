document.querySelectorAll('.card').forEach(card => {
  let a = card.getAttribute('big')
  let b = card.getAttribute('small')
  card.innerHTML= `
      <h3> ${a}</h3> 
      <p> ${b} </p>
  `
})