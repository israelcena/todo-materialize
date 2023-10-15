// Elements
const cardContainerEl = document.getElementById('card-container')
const formAddNewCardEl = document.getElementById('add-card-form')
const removedEvent = new Event('removed')

let cardComponent = (title = 'Novo Titulo', body = '', dateConclusion = '', image) => {
  return (
    `
    <div class="col xl4 l6 m6 s12 card-element">
      <div class="card medium sticky-action hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src=${image}
              alt="card-image">
            <span class="card-title teal darken-1">${title}</span>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
            <i class="material-icons right">more_vert</i></span>
            <p>
              ${dateConclusion === '' ? 'Entrega: Sem previsão' : `Entrega: ${dateConclusion}`}
            </p>
          </div>
          <div class="card-action">
            <a href="#" class="green-text">
              <i class="small material-icons">check</i>
            </a>
            <a href="#" class="right red-text" style="margin-right: 0;">
              <i class="small material-icons delete">delete</i>
            </a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
            <p>${body}</p>
          </div>
        </div>
      </div>
    `
  )
}

formAddNewCardEl.addEventListener('submit', (event) => {
  event.preventDefault()

  const {title, body, dateConclusion} = event.target
  const tempImage = 'https://picsum.photos/550/300'
  cardContainerEl.innerHTML += cardComponent(title.value, body.value, dateConclusion.value, tempImage)
  event.target.reset()
})

cardContainerEl.addEventListener('click', (event) => {
  const clickedItem = event.target
  if (Array.from(clickedItem.classList).includes('delete')) {
    clickedItem.closest('.card-element').remove()
    cardContainerEl.dispatchEvent(removedEvent)
  }
})

cardContainerEl.addEventListener('removed', () => {
  M.toast({
    html: 'Card Removido',
    displayLength: '1500',
    classes: 'green',
  })
})
