import Card from './Card'
import { render, fireEvent, screen } from '@testing-library/react'
const publicDirPath = '/tarot-art'

const mockOnCardClick = jest.fn()
jest.mock('../Deck/useDeck', () => ({
  __esModule: true,
  useDeck: () => {
    return {
      onCardClick: mockOnCardClick,
      selectedCardId: 'c01',
      lastSelectedCardId: 'c02',
    }
  },
}))

jest.mock('./useCard', () => ({
  __esModule: true,
  useCard: (card) => {
    return {
      flipAnimationClass: 'animate__animated',
      cardArtUrl: `${publicDirPath}/${card.id}.jpg`,
      onCardClick: mockOnCardClick,
    }
  },
}))

describe('<Card />', () => {
  const cardData = {
    id: 'c01',
    title: 'Card 1 title',
    content: 'Card 1 content',
  }

  beforeEach(() => {
    render(<Card card={cardData} />)
  })

  it('should render with correct card image', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', '/tarot-art/c01.jpg')
  })

  it('should use animation classes', () => {
    expect(screen.getByRole('img')).toHaveClass('animate__animated')
  })

  it('should call onCardClick', () => {
    fireEvent.click(screen.getByRole('img'))
    expect(mockOnCardClick).toHaveBeenCalledTimes(1)
  })
})
