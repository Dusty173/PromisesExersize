let baseURL = "https://deckofcardsapi.com/api/deck"
// 1:
$.getJSON(`${baseURL}/new/draw`, function(data){
    let { value, suit } = data.cards[0];
    console.log(`${value} of ${suit}`)
});

// 2:
$.getJSON(`${baseURL}/new/draw`, function(data){
    let card1 = data.cards[0];
    let deck = data.deck_id;
    $.getJSON(`${baseURL}/${deck}/draw/`, function(data){
        let card2 = data.cards[0];
        [card1, card2].forEach(function(card){
            console.log(`${card.value} of ${card.suit}`)
        })
    })
});

// 3:
let deck = null;
let $btn = $('button');
let $carddiv = $('#card');

$.getJSON(`${baseURL}/new/shuffle`, function(data){
    deck = data.deck_id;
});

$btn.on('click', function(){
    $.getJSON(`${baseURL}/${deck}/draw`, function(data){
        let Cardimg = data.cards[0].image;
        $carddiv.append($('<img>', {src: Cardimg}))
    });
});