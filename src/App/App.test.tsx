import React from "react"
import { render } from "react-testing-library"
import App from "./App"

describe("The Home Page", () => {
  xit("successfully loads", () => {
    const { getByText } = render(<App />)
    expect(getByText("create oss pr")).toBeInTheDocument()
  })
})
