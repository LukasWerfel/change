import React from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import { COLOR, BASE_SIZING_UNIT } from "../../../../variables"

const FAKE_JOURNAL_DATA = [
  {
    id: 1,
    name: "My Journal",
  },
]

const HeaderBackground = styled.div({
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  height: `${6 * BASE_SIZING_UNIT}px`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Padding = styled.div({
  padding: `${1 * BASE_SIZING_UNIT}px`,
  ">*": {
    paddingBottom: `${3 * BASE_SIZING_UNIT}px`,
  },
})

const JournalList = () => (
  <div>
    <HeaderBackground>
      <button>Edit</button>
      <button>Add</button>
    </HeaderBackground>
    <Padding>
      <Journal />
      <Journal />
      <Journal />
    </Padding>
  </div>
)

export default JournalList
