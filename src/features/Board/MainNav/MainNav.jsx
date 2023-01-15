import { useDeck } from '../Deck/useDeck'

export const MainNav = () => {
  const { shuffleDeck } = useDeck()

  return (
    <div className="buttonsNav">
      <div>
        <button onClick={shuffleDeck}>Embaralhar</button>
      </div>
    </div>
  )
}

export default MainNav
