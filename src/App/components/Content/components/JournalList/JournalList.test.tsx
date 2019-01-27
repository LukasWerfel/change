import React from "react"
import { render } from "react-testing-library"
import JournalList from "./JournalList"

describe("<JournalList />", () => {
  it("renders", () => {
    const { getByText } = render(<JournalList />)
    expect(getByText("Edit")).toBeInTheDocument()
    expect(getByText("Add")).toBeInTheDocument()
  })
})
