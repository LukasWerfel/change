import React, { useState } from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import DayOverview from "./components/DayOverview/DayOverview"
import { COLOR } from "../../../../variables"
import { Journal as JournalType, journalFactory, entryFactory } from "../../../../types"
import Spacer from "../../../../../components/Spacer/Spacer"
import AddNewJournalModal from "./components/AddNewJournalModal/AddNewJournalModal"

const MenuBackground = styled.div({
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
})

const Menu = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "40px",
})

const JournalList = () => {
  const [journalList, setJournalList] = useState<Array<JournalType>>([])
  const [showNewJournalModal, setShowNewJournalModal] = useState<boolean>(false)
  return (
    <div>
      {showNewJournalModal && (
        <AddNewJournalModal
          onCancel={() => setShowNewJournalModal(false)}
          onDone={name => {
            setJournalList([
              ...journalList,
              journalFactory.build({
                name,
                entries: [entryFactory.build()],
              }),
            ])
            setShowNewJournalModal(false)
          }}
        />
      )}
      <MenuBackground>
        <Spacer right="8px" left="8px">
          <Menu>
            <button>Edit</button>
            <button onClick={() => setShowNewJournalModal(true)}>Add</button>
          </Menu>
          <DayOverview />
        </Spacer>
      </MenuBackground>
      <Spacer right="8px" left="8px">
        {journalList.map(jn => (
          <Spacer key={jn.id} top="8px" bottom="16px">
            <Journal journal={jn} />
          </Spacer>
        ))}
      </Spacer>
    </div>
  )
}

export default JournalList
