import React from "react"
import { render, fireEvent } from "react-testing-library"
import JournalList from "./JournalList"
import MockDate from "mockdate"

beforeAll(() => {
  MockDate.set("2019-02-24")
})

describe("<JournalList />", () => {
  it("clicking 'add' and 'done' adds journal", () => {
    const { queryByText, queryByPlaceholderText } = render(<JournalList />)
    const journalName = "My new journal"
    fireEvent.click(queryByText("Add"))
    fireEvent.change(queryByPlaceholderText("name"), {
      target: { value: journalName },
    })
    fireEvent.click(queryByText("Done"))
    expect(queryByText(journalName)).toBeInTheDocument()
  })

  it("clicking 'add' then 'cancel' does not add journal", () => {
    const { queryByText, queryByPlaceholderText } = render(<JournalList />)
    const journalName = "My new journal"
    fireEvent.click(queryByText("Add"))
    fireEvent.change(queryByPlaceholderText("name"), {
      target: { value: journalName },
    })
    fireEvent.click(queryByText("Cancel"))
    expect(queryByText(journalName)).not.toBeInTheDocument()
  })

  it("renders edit button", () => {
    const { getByText } = render(<JournalList />)
    expect(getByText("Edit")).toBeInTheDocument()
  })
})
