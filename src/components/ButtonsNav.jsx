import React from "react"
import { useDeck } from "../providers/DeckProvider"

export const ButtonsNav = () => {
  const { shuffleDeck } = useDeck()

  return (
    <div className="buttonsNav">
      <div>
        <button onClick={shuffleDeck}>Embaralhar</button>
      </div>
    </div>
  )
}
