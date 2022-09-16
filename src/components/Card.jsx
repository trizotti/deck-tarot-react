const publicDirPath = location.origin + "/tarot-art"

export const Card = ({ card, onClick }) => {
  return (
    <img
      src={`${publicDirPath}/${card.id}.jpg`}
      onClick={() => onClick(card)}
    />
  )
}
