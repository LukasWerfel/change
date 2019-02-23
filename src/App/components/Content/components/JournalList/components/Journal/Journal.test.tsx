import React from "react"
import { render } from "react-testing-library"
import Journal from "./Journal"
import { journalFactory } from "../../../../../../types"

describe("<Journal />", () => {
  it("renders", () => {
    const name = "My journal"
    const journal = journalFactory.build({ name })
    const { getByText } = render(<Journal journal={journal} />)
    expect(getByText(name)).toBeInTheDocument()
  })
})
