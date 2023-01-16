import { useDeck } from '../Deck/useDeck'
import styles from './MainContent.module.css'
import reactLogo from '../../../assets/react.png'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className={styles.pageContent}>
      {selectedCard ? (
        <div className={styles.cardSymbols}>
          <h2>{selectedCard.title}</h2>
          <br />
          <div>{selectedCard.content}</div>
        </div>
      ) : (
        <div className={styles.cardSymbols}>
          <h1>Insights Tarot</h1>
          <br />
          <h2>As cartas estão embaralhadas</h2>
          <br />
          <br />
          <small>
            - Selecione uma carta para continuar; <br />
            - Virar a carta aberta também faz o deck embaralhar;<br />
            - Você pode checar todas as posições antes de embaralhar novamente;<br />
            - A cada tirada é possível solicitar um insight sobre a carta (em breve).
          </small>
        </div>
      )}
    </main>
  )
}

export default MainContent
