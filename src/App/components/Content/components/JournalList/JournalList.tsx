import React from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import { COLOR, getSize } from "../../../../variables"

const FAKE_JOURNAL_DATA = [
  {
    id: 1,
    name: "My Journal",
  },
]

const HeaderBackground = styled.div({
  paddingLeft: getSize(1),
  paddingRight: getSize(1),
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  height: getSize(6),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Padding = styled.div({
  padding: getSize(1),
  ">*": {
    paddingBottom: getSize(3),
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
