import React from "react"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import Div100vh from "react-div-100vh"
import { getSize } from "./variables"

const FOOTER_HEIGHT = getSize(6)

const FixedHeightContent = styled(Content)({
  height: `calc(100% - ${FOOTER_HEIGHT})`,
})

const FixedHeightFooter = styled(Footer)({
  height: FOOTER_HEIGHT,
})

const App = () => (
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
    <Div100vh>
      <FixedHeightContent />
      <FixedHeightFooter />
    </Div100vh>
  </React.Fragment>
)

export default App
