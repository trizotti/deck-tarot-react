import React from "react"
export const ButtonsNav = ({ onShuffle }) => {
  return (
    <div className="buttonsNav">
      <div>
        <button onClick={onShuffle}>Embaralhar</button>
      </div>
    </div>
  )
}
