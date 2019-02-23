import React from "react"
import { render } from "react-testing-library"
import JournalList from "./JournalList"
import { journalFactory } from "../../../../types"

describe("<JournalList />", () => {
  it("renders add button", () => {
    const { getByText } = render(<JournalList journalList={[]} />)
    expect(getByText("Add")).toBeInTheDocument()
  })

  it("renders edit button", () => {
    const { getByText } = render(<JournalList journalList={[]} />)
    expect(getByText("Edit")).toBeInTheDocument()
  })

  it("renders journals", () => {
    const journalList = [
      journalFactory.build({ name: "Journal One" }),
      journalFactory.build({ name: "Journal Two" }),
      journalFactory.build({ name: "Journal Three" }),
    ]
    const { getByText } = render(<JournalList journalList={journalList} />)
    journalList.forEach(jn => expect(getByText(jn.name)).toBeInTheDocument())
  })
})
