import { useDeck } from '../Deck/useDeck'
import styles from './MainNav.module.css'

export const MainNav = () => {
  const { shuffleDeck } = useDeck()

  return (
    <div className={styles.mainNav}>
      <div>
        <button onClick={shuffleDeck}>Embaralhar</button>
      </div>
    </div>
  )
}

export default MainNav
