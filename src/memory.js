class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined
   // let shuffled = Array.from(this.cards);
    for ( let i = 0; i < this.cards.length -1; i++) {
      let primera = this.cards[i];
      let ran = Math.floor(Math.random() * this.cards.length);
      this.cards[i] = this.cards[ran];
      this.cards[ran] = primera;
    }
    console.log(this.cards)
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    let check = false;
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++
      check = true;
     } else check = false;
     return check 
    

  }
  checkIfFinished() {
    // ... write your code here
    let checkWin = false;
    if ((this.cards.length /2) > this.pairsGuessed) return checkWin;
    if ((this.cards.length /2) == this.pairsGuessed) return true;
    return checkWin;
  }
}
