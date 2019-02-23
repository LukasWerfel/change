import React from "react"
import styled from "@emotion/styled"
import { COLOR, getSize } from "../../../../../../variables"

const Entry = styled.div({
  height: getSize(3),
  boxShadow: "inset 0 0 1px #000000",
  flex: 1,
  ":first-of-type": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  ":last-child": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
})

const EntryList = styled.div({
  paddingTop: getSize(1),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Journal = () => (
  <div>
    <span>Create OSS PR</span>
    <EntryList>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </EntryList>
  </div>
)

export default Journal
