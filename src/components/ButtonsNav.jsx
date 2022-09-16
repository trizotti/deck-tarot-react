import React from "react"

export const ButtonsNav = ({ onShuffle, onResetClick }) => {
  return (
    <div className="buttonsNav">
      <div>
        <button onClick={onShuffle}>Embaralhar</button>
      </div>
      <div>
        <button onClick={onResetClick}>Resetar</button>
      </div>
    </div>
  )
}
