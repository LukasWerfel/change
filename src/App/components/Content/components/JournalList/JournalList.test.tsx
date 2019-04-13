import React from "react"
import { render } from "react-testing-library"
import JournalList from "./JournalList"
import { journalFactory, entryFactory } from "../../../../types"
import MockDate from "mockdate"

beforeAll(() => {
  MockDate.set("2019-02-24")
})

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
      journalFactory.build({
        name: "Journal Three",
        entries: [
          entryFactory.build({
            date: "2019-02-24",
            status: "SUCCEEDED",
          }),
        ],
      }),
    ]
    const { getByText, queryByTestId } = render(<JournalList journalList={journalList} />)
    journalList.forEach(jn => expect(getByText(jn.name)).toBeInTheDocument())
    expect(queryByTestId("Entry-2019-02-24-Succeeded")).toBeInTheDocument()
  })
})
