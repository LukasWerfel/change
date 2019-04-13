import React from "react"
import styled from "@emotion/styled"
import Journal from "./components/Journal/Journal"
import DayOverview from "./components/DayOverview/DayOverview"
import { COLOR } from "../../../../variables"
import { Journal as JournalType } from "../../../../types"
import Spacer from "../../../../../components/Spacer/Spacer"

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

type Props = {
  journalList: Array<JournalType>
}

const JournalList = ({ journalList }: Props) => (
  <div>
    <MenuBackground>
      <Spacer right="8px" left="8px">
        <Menu>
          <button>Edit</button>
          <button>Add</button>
        </Menu>
        <DayOverview />
      </Spacer>
    </MenuBackground>
    <Spacer right="8px" left="8px">
      {journalList.map(jn => (
        <Spacer top="8px" bottom="16px">
          <Journal key={jn.id} journal={jn} />
        </Spacer>
      ))}
    </Spacer>
  </div>
)

export default JournalList
