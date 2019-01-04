import React, { Component } from "react"
import logo from "./logo.svg"
import { Global, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img({
  animation: `${spin} infinite 20s linear`,
  height: "40vmin",
})

const Header = styled.header({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
})

const Link = styled.a({
  color: "#61dafb",
})

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Global
          styles={{
            body: {
              margin: 0,
              padding: 0,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            },
          }}
        />
        <Header>
          <Logo src={logo} alt="logo" />
          <p>Change</p>
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
        </Header>
      </React.Fragment>
    )
  }
}

export default App
