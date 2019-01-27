import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../../variables"

interface Props {
  className?: string
}

const Background = styled.div({
  borderTop: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Footer = ({ className }: Props) => (
  <Background className={className}>
    <button>Journals</button>
    <button>Settings</button>
  </Background>
)

export default Footer
