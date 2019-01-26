import React, { Component } from "react"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { BASE_SIZING_UNIT } from "./variables"

const FOOTER_HEIGHT = `${6 * BASE_SIZING_UNIT}px`

const FixedHeightFooter = styled(Footer)({
  height: FOOTER_HEIGHT,
})

const FixedHeightContent = styled(Content)({
  height: `calc(100vh - ${FOOTER_HEIGHT})`,
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
    <div>
      <FixedHeightContent />
      <FixedHeightFooter />
    </div>
  </React.Fragment>
)

export default App
