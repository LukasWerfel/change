import React from "react"
import { render, fireEvent } from "react-testing-library"
import JournalList from "./JournalList"
import MockDate from "mockdate"

beforeAll(() => {
  MockDate.set("2019-02-24")
})

describe("<JournalList />", () => {
  it("clicking 'add' and 'done' adds journal", () => {
    const { queryByText } = render(<JournalList />)
    fireEvent.click(queryByText("Add"))
    fireEvent.click(queryByText("Done"))
    expect(queryByText("Journal 0")).toBeInTheDocument()
  })

  it("clicking 'add' then 'cancel' does not add journal", () => {
    const { queryByText } = render(<JournalList />)
    fireEvent.click(queryByText("Add"))
    fireEvent.click(queryByText("Cancel"))
    expect(queryByText("Journal 0")).not.toBeInTheDocument()
  })

  it("renders edit button", () => {
    const { getByText } = render(<JournalList />)
    expect(getByText("Edit")).toBeInTheDocument()
  })
})
