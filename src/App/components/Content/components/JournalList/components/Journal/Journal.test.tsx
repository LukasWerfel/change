import React from "react"
import { render, cleanup } from "react-testing-library"
import Journal from "./Journal"
import { journalFactory, entryFactory } from "../../../../../../types"

afterEach(cleanup)

describe("<Journal />", () => {
  it("renders", () => {
    const name = "My journal"
    const journal = journalFactory.build({ name })
    const { getByText } = render(<Journal journal={journal} />)
    expect(getByText(name)).toBeInTheDocument()
  })

  it("renders entries", () => {
    const entries = [
      entryFactory.build({
        date: "2019-02-24",
        status: "SUCCEEDED",
      }),
      entryFactory.build({
        date: "2019-02-22",
        status: "SUCCEEDED",
      }),
      entryFactory.build({
        date: "2019-02-21",
        status: "FAILED",
      }),
      entryFactory.build({
        date: "2019-02-20",
        status: "SUCCEEDED",
      }),
      entryFactory.build({
        date: "2019-02-17",
        status: "SUCCEEDED",
      }),
    ]
    const name = "My journal"
    const journal = journalFactory.build({ name, entries })
    const { queryByTestId, debug } = render(<Journal journal={journal} />)
    expect(queryByTestId("Entry-2019-02-24-Succeeded")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-23-Failed")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-22-Succeeded")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-21-Failed")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-20-Succeeded")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-19-Failed")).toBeInTheDocument()
    expect(queryByTestId("Entry-2019-02-18-Failed")).toBeInTheDocument()

    // older than 7 days
    expect(queryByTestId("Entry-2019-02-17-Succeeded")).not.toBeInTheDocument()
  })
})
