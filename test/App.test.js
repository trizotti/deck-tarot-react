import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import App from "../src/App"

jest.mock("../src/components/Deck", () => {
  const Deck = ({ cards }) => {
    return cards.map((card, index) => (
      <div key={index}>
        {index + 1}. {card.title}
      </div>
    ))
  }
  return { Deck }
})

describe("App", () => {
  function renderComponent() {
    return render(<App />)
  }

  it("renders selected card title", () => {})
  it("renders selected card content", () => {})
  // Testar shuffle, reset

  describe("when shuffle", () => {
    it("shuffles deck", () => {
      const { debug } = renderComponent()
      // debug()
      expect(screen.getByText('1. Símbolos de "O Louco"')).toBeInTheDocument()
      fireEvent.click(screen.getByRole("button", { name: "Embaralhar" }))
      expect(
        screen.queryByText('1. Símbolos de "O Louco"')
      ).not.toBeInTheDocument()
    })
  })
})
