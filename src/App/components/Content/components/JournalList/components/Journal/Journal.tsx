import React from "react"
import styled from "@emotion/styled"
import { Journal as JournalType } from "../../../../../../types"

const Entry = styled.div({
  height: "24px",
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
  paddingTop: "8px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const NUMBER_OF_ENTRIES_SHOWN = 7

type Props = {
  journal: JournalType
}

const Journal = ({ journal }: Props) => (
  <div>
    <span>{journal.name}</span>
    <EntryList>{new Array(NUMBER_OF_ENTRIES_SHOWN).fill(<Entry />)}</EntryList>
  </div>
)

export default Journal
