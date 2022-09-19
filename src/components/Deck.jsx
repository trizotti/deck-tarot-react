import { Card } from "./Card"

export const Deck = ({ cards, onCardSelected, selectedCardId }) => {
  return (
    <div className="deck">
      <div className="deckListView">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onClick={onCardSelected}
              selectedCardId={selectedCardId}
            />
          )
        })}
      </div>
    </div>
  )
}
