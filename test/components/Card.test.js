import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { Card } from "../../src/components/Card"

describe("Card", () => {
  const cardProps = {
    id: "c00",
    title: 'A title"',
    content: "Some description",
  }

  function renderComponent(props = {}) {
    const finalProps = {
      card: cardProps,
      onClick: jest.fn(),
      ...props,
    }
    return render(<Card {...finalProps} />)
  }

  it("renders correctly", () => {
    renderComponent()
    const cardImage = screen.queryByTestId("cardImage")
    expect(cardImage).toBeInTheDocument()
  })

  it("renders an img element", () => {
    const { queryByTestId } = renderComponent()
    const cardImage = queryByTestId("cardImage")
    expect(cardImage.tagName).toBe("IMG")
  })

  it("renders image from urls based on id", () => {
    const { queryByTestId } = renderComponent()
    const cardImage = queryByTestId("cardImage")
    expect(cardImage.src).toBe("http://localhost/tarot-art/c00.jpg")
  })

  describe("when the image is clicked", () => {
    it("triggers onClick", () => {
      const handleClick = jest.fn()
      const { queryByTestId } = renderComponent({ onClick: handleClick })
      const cardImage = queryByTestId("cardImage")
      fireEvent.click(cardImage)
      expect(handleClick).toBeCalledTimes(1)
    })
  })
})
