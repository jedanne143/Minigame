
let card1 = null ;
let card2 = null;
let matchedCards = []
let selectedCards= []
let match = new Audio("audio/correct.mp3")
let mismatch = new Audio("audio/wrong.mp3")

//function called when playing the game
function play(card) {
//prevent reselection of matched cards and selected card
    if (matchedCards.includes(card) ) return;
    if (selectedCards.includes(card) ) return;

    if (card1 == null) {
        card.style.filter = "brightness(1)"
        card1 = card;
        selectedCards.push(card)
    } else if (card2 == null  ){
        card.style.filter = "brightness(1)"
        card2 = card
        setTimeout( checkMatch , 300)
    }
}
//checks if 2 selected cards are matching
function checkMatch() {
    if(card1.alt===card2.alt){
        match.play()
        matchedCards.push(card1)
        matchedCards.push(card2)
        card1 = null 
        card2 = null
    } else {
        mismatch.play()
        card1.style.filter = "brightness(0)"
        card2.style.filter = "brightness(0)"
        card1 = null 
        card2 = null        
        selectedCards = []
    }
}

