import React from "react"
import styled from "@emotion/styled"

/* prettier breaks this code somehow */
/* TODO: investigate */
// prettier-ignore
type Props = {
  top?: string,
  right?: string,
  bottom?: string,
  left?: string,
}

const Spacer = styled.div(({ top, right, bottom, left }: Props) => ({
  paddingTop: top,
  paddingRight: right,
  paddingBottom: bottom,
  paddingLeft: left,
}))

Spacer.defaultProps = {
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
}

export default Spacer
