import React from "react"
import { render } from "react-testing-library"
import App from "./App"

describe("The Home Page", () => {
  it("successfully loads", () => {
    const { getByText } = render(<App />)
    expect(getByText("create oss pr")).toBeInTheDocument()
  })
})
