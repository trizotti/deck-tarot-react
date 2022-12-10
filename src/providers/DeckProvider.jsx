import { createContext, useState, useContext } from "react"
import PropTypes from "prop-types"
import tarotCards from "../content/tarot.json"

const DeckContext = createContext(null)

const shuffle = (array) => {
  const newArray = [...array]
  let currentIndex = newArray.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }
  return newArray
}

const DeckProvider = ({ children }) => {
  const [cards, setCards] = useState(tarotCards)
  const [lastSelectedCardId, setLastSelectedCardId] = useState(null)
  const [selectedCardId, setSelectedCardId] = useState(null)
  const selectedCard = cards.find((card) => card.id === selectedCardId) || null

  const shuffleDeck = () => {
    setLastSelectedCardId(selectedCardId)
    setSelectedCardId(null)
    setCards(shuffle(cards))
  }

  const onCardClick = (card) => {
    let newSelected = null
    if (selectedCardId !== card.id) {
      newSelected = card.id
    }
    setLastSelectedCardId(selectedCardId)
    setSelectedCardId(newSelected)
  }

  const value = {
    cards, lastSelectedCardId, selectedCardId,
    onCardClick, shuffleDeck, selectedCard
  }

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>
}

DeckProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useDeck = () => {
  const deckContext = useContext(DeckContext)

  if (!deckContext) {
    throw new Error(
      'useDeck was called without being nested inside deck provider.'
    )
  }

  return deckContext
}

export default DeckProvider