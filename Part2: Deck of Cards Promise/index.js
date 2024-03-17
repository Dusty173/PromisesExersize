let baseURL = "https://deckofcardsapi.com/api/deck"

// 1:
$.getJSON(`${baseURL}/new/draw`).then(data => {
    let { value, suit } = data.cards[0];
    console.log(`${value} of ${suit}`)
});

// 2:
let card1 = null;
$.getJSON(`${baseURL}/new/draw`).then(data => {
    card1 = data.cards[0];
    let deck = data.deck_id;
    return $.getJSON(`${baseURL}/${deck}/draw`).then(data => {
        let card2 = data.cards[0];
        [card1, card2].forEach(function(card){
            console.log(`${card.value} of ${card.suit}`);
        });
    });
});

// 3:

let deck = null;
let $btn = $('button');
let $cardDiv = $('#card');

$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deck = data.deck_id;
  });

$btn.on('click', function(){   
    $.getJSON(`${baseURL}/${deck}/draw`).then(data => {
        let Cardimg = data.cards[0].image;
        $cardDiv.append($('<img>', {src: Cardimg}))
    });
});