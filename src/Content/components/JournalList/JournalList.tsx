import React from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import { COLOR, BASE_SIZING_UNIT } from "../../../variables"

const HEADER_HEIGHT = `${6 * BASE_SIZING_UNIT}px`

const FAKE_JOURNAL_DATA = [
  {
    id: 1,
    name: "My Journal",
  },
]

const HeaderBackground = styled.div({
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  height: HEADER_HEIGHT,
})

const JournalList = () => (
  <div>
    <HeaderBackground>
      <span>Edit</span>
      <span>Add</span>
    </HeaderBackground>
    <div>
      <Journal />
      <Journal />
      <Journal />
    </div>
  </div>
)

export default JournalList
