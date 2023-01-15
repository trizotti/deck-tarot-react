import Deck from './Deck'
import { render, fireEvent, screen } from '@testing-library/react'

const mockShuffleDeck = jest.fn()
jest.mock('../Deck/useDeck', () => ({
  __esModule: true,
  useDeck: () => {
    return {
    cards: [ { id: 1 }, { id: 2} ],
    onCardClick: () => {},
    shuffleDeck: mockShuffleDeck,
    selectedCard: null,
    }
  },
}))

jest.mock('../Card/Card', () => ({
  __esModule: true,
  default: () => {
    return <div>CARD</div>
  },
}))

describe('Deck', () => {
  beforeEach(() => {
    render(<Deck timeoutAutoSelect={0}/>)
  })

  it('should render cards', () => {
    expect(screen.getAllByText('CARD').map(c => c.textContent)).toEqual(['CARD', 'CARD'])
  })

  it('should call shuffle on mount', () => {
    expect(mockShuffleDeck).toHaveBeenCalled()
  })
})