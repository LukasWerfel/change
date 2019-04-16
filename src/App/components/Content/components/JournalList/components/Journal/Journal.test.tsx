import React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import Journal from "./Journal"
import { journalFactory, entryFactory } from "../../../../../../types"
import MockDate from "mockdate"

beforeAll(() => {
  MockDate.set("2019-02-24")
})

afterEach(cleanup)

afterAll(() => {
  MockDate.reset()
})

describe("<Journal />", () => {
  it("renders", () => {
    const journal = journalFactory.build()
    const { getByText } = render(<Journal journal={journal} />)
    expect(getByText(journal.name)).toBeInTheDocument()
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
    const journal = journalFactory.build({ entries })
    const { queryByTestId } = render(<Journal journal={journal} />)
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

  it("renders editor when clicked and hides it again when indicating success", () => {
    const journal = journalFactory.build()
    const { queryByText, getByText } = render(<Journal journal={journal} />)
    expect(queryByText("Yes")).not.toBeInTheDocument()
    expect(queryByText("No")).not.toBeInTheDocument()
    fireEvent.click(getByText(journal.name))
    expect(queryByText("Yes")).toBeInTheDocument()
    expect(queryByText("No")).toBeInTheDocument()
    fireEvent.click(getByText("Yes"))
    expect(queryByText("Yes")).not.toBeInTheDocument()
    expect(queryByText("No")).not.toBeInTheDocument()
  })

  it("renders editor when clicked and hides it again when indicating failure", () => {
    const journal = journalFactory.build()
    const { queryByText, getByText } = render(<Journal journal={journal} />)
    expect(queryByText("Yes")).not.toBeInTheDocument()
    expect(queryByText("No")).not.toBeInTheDocument()
    fireEvent.click(getByText(journal.name))
    expect(queryByText("Yes")).toBeInTheDocument()
    expect(queryByText("No")).toBeInTheDocument()
    fireEvent.click(getByText("No"))
    expect(queryByText("Yes")).not.toBeInTheDocument()
    expect(queryByText("No")).not.toBeInTheDocument()
  })
})
