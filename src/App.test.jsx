import { createContext } from 'react'
import App from './App'
import { render, fireEvent, screen } from '@testing-library/react'
import DeckProvider from './features/Board/Deck/DeckProvider'

jest.mock('./features/Board/MainContent/MainContent', () => ({
  __esModule: true,
  default: () => <div>MainContent</div>
}))

jest.mock('./features/Board/Deck/Deck', () => ({
  __esModule: true,
  default: () => <div>Deck</div>
}))

jest.mock('./features/Board/MainNav/MainNav', () => ({
  __esModule: true,
  default: () => <div>MainNav</div>
}))

describe('<App />', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should render MainNav', () => {
    expect(screen.getByText(/mainnav/i)).toBeInTheDocument()
  })

  it('should render Deck', () => {
    expect(screen.getByText(/deck/i)).toBeInTheDocument()
  })

  it('should render MainContent', () => {
    expect(screen.getByText(/maincontent/i)).toBeInTheDocument()
  })
})