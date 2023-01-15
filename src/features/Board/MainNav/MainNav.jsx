import { useDeck } from '../Deck/useDeck'
import styles from './MainNav.module.css'

export const MainNav = () => {
  const { shuffleDeck, selectedCardId } = useDeck()

  return (
    <div className={styles.mainNav}>
      <div>
        <button disabled={!selectedCardId} onClick={shuffleDeck}>Embaralhar</button>
      </div>
    </div>
  )
}

export default MainNav
