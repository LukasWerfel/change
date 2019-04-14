import React from "react"
import { render, fireEvent } from "react-testing-library"
import JournalList from "./JournalList"
import { journalFactory, entryFactory } from "../../../../types"
import MockDate from "mockdate"

beforeAll(() => {
  MockDate.set("2019-02-24")
})

describe("<JournalList />", () => {
  it("adds and displays journals", () => {
    const { getByText, debug } = render(<JournalList />)
    const addButton = getByText("Add")
    expect(addButton).toBeInTheDocument()
    fireEvent.click(addButton)
    expect(getByText("Journal 0")).toBeInTheDocument()
  })

  it("renders edit button", () => {
    const { getByText } = render(<JournalList />)
    expect(getByText("Edit")).toBeInTheDocument()
  })
})
