let baseURL = "https://deckofcardsapi.com/api/deck"

// 1:
async function oneCard(){
    let data = await $.getJSON(`${baseURL}/new/draw`)
        let { value, suit } = data.cards[0];
        console.log(`${value} of ${suit}`)
}
oneCard()

// 2:
async function twoCards(){
let card1 = await $.getJSON(`${baseURL}/new/draw`);
let deck = card1.deck_id;
let card2 = await $.getJSON(`${baseURL}/${deck}/draw`);
[card1, card2].forEach(card => {
    let { suit, value } = card.cards[0];
    console.log(`${value} of ${suit}`);
})
}
twoCards()

// 3:

async function displayDeck(){
let $btn = $('button');
let $cardDiv = $('#card');

let deck = await $.getJSON(`${baseURL}/new/shuffle`)
    $btn.on('click', async function(){
        let card = await $.getJSON(`${baseURL}/${deck.deck_id}/draw`)
        let cardImg = card.cards[0].image;
        $cardDiv.append($('<img>', {src: cardImg}))
    })
}
displayDeck()