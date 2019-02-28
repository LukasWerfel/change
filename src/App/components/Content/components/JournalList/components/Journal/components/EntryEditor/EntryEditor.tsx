import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../../../../../../../../variables"

const Background = styled.div({
  height: "56px",
  backgroundColor: COLOR.GREY[6],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
})

const EntryEditor = () => (
  <Background>
    <button>Yes</button>
    <button>No</button>
  </Background>
)

export default EntryEditor
