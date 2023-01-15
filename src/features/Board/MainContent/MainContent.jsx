import { useDeck } from '../Deck/useDeck'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className="pageContent">
      {selectedCard && (
        <div className="cardSymbols">
          <h2>{selectedCard.title}</h2>
          <div>{selectedCard.content}</div>
        </div>
      )}
    </main>
  )
}

export default MainContent
