const main = () => {
  let suits = ['hearts', 'diams', 'clubs', 'spades']
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

  let deck = []

  // make a function that creates a deck
  const makeDeck = () => {
    deck = []

    // for each type of suit
    for (let i = 0; i < suits.length; i++) {
      // and for each rank
      for (let j = 0; j < ranks.length; j++) {
        // make a card
        let card = {}
        card.suit = suits[i]
        card.rank = ranks[j]

        deck.push(card)
      }
    }
  }

  const shuffleDeck = () => {
    // Shuffle the deck
  }

  const drawCard = () => {
    if (deck.length > 0) {
      let card = deck.shift()
      console.log(card)

      // put the card on the screen
      // - first find the "deck" div
      const element = document.querySelector('.deck')
      console.log(element)

      // <div class="card">
      //   <span class="rank">10</span>
      //   <span class="suit">Hearts</span>
      // </div>

      // - create element for the div
      const newCard = document.createElement('div')
      newCard.className = 'card'

      // Create an element for the rank
      const newRank = document.createElement('span')
      newRank.className = 'rank'
      newRank.textContent = card.rank
      newCard.appendChild(newRank)

      // Create an element for the suit
      const newSuit = document.createElement('span')
      newSuit.className = 'suit'
      newSuit.textContent = card.suit
      newCard.appendChild(newSuit)

      // - append to the element
      element.appendChild(newCard)
    }
  }

  makeDeck()
  shuffleDeck()
  drawCard()

  // let randIndex = Math.floor(Math.random() * deck.length)
  // $('#drawbtn').click(function() {
  //   let myCard = drawCard()

  //   if (myCard) {
  //     makeCard(myCard.suit, myCard.rank)
  //   } else {
  //     alert('no more cards in the deck')
  //   }
  // })

  // console.log('Deck of Cards ', deck.length, ' CARDS')
  // console.log(deck)
}

// function makeCard(suit, rank) {
//   let card = $('.card.template').clone()

//   card.removeClass('template')

//   card.find('.rank').html(rank)
//   card.find('.suit').html('&' + suit + ';')

//   if (suit === 'hearts' || suit === 'diams') {
//     card.addClass('red')
//   }

//   $('body').append(card)
// }

document.addEventListener('DOMContentLoaded', main)

// function newFunction(makeDeck) {
//   makeDeck()
// }
