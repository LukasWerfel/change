import React from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import { COLOR } from "../../../../variables"
import { Journal as JournalType } from "../../../../types"

const HeaderBackground = styled.div({
  paddingLeft: "8px",
  paddingRight: "8px",
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  height: "56px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Padding = styled.div({
  padding: "8px",
  ">*": {
    paddingBottom: "24px",
  },
})

type Props = {
  journalList: Array<JournalType>
}

const JournalList = ({ journalList }: Props) => (
  <div>
    <HeaderBackground>
      <button>Edit</button>
      <button>Add</button>
    </HeaderBackground>
    <Padding>
      {journalList.map(jn => (
        <Journal key={jn.id} journal={jn} />
      ))}
    </Padding>
  </div>
)

export default JournalList
