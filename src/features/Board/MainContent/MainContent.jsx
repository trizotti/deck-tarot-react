import { useDeck } from '../Deck/useDeck'
import styles from './MainContent.module.css'
import reactLogo from '../../../assets/react.png'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className={styles.pageContent}>
      <span style={{ display: selectedCard ? 'none' : 'block'}}>
        <img src={reactLogo} />
      </span>
      
      {selectedCard ? (
        <div className={styles.cardSymbols}>
          <h2>{selectedCard.title}</h2>
          <br />
          <div>{selectedCard.content}</div>
        </div>
      ) : (
        <div className={styles.cardSymbols}>
          <h1>Deck de Tarot com React</h1>
          <br />
          <h2>As cartas foram embaralhadas</h2>
          <br />
          <br />
          <small>Selecione uma carta para continuar. <br />Dica: virar a carta aberta também faz o deck embaralhar.</small>
          
        </div>
      )}
    </main>
  )
}

export default MainContent
