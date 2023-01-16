import './App.css'
import MainNav from './features/Board/MainNav/MainNav.jsx'
import Deck from './features/Board/Deck/Deck'
import DeckProvider from './features/Board/Deck/DeckProvider'
import MainContent from './features/Board/MainContent/MainContent.jsx'
import styles from './App.module.css'

function App() {
  return (
    <DeckProvider>
      <div className={styles.app}>
        <MainNav />
        <Deck />
        <MainContent />
      </div>
    </DeckProvider>
  )
}

export default App
