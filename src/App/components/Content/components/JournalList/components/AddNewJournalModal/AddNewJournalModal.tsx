import React from "react"
import Modal from "./components/Modal/Modal"
import styled from "@emotion/styled"
import { COLOR } from "../../../../../../variables"
import Spacer from "../../../../../../../components/Spacer/Spacer"

const Menu = styled.div({
  borderBottom: `1px solid ${COLOR.GREY[4]}`,
  backgroundColor: COLOR.GREY[2],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "40px",
})

/* prettier breaks this code somehow */
/* TODO: investigate */
// prettier-ignore
type Props = {
  onCancel: () => void,
  onDone: () => void
}

const AddNewJournalModal = ({ onCancel, onDone }: Props) => (
  <Modal>
    <Menu>
      <Spacer left="8px">
        <button onClick={onCancel}>Cancel</button>
      </Spacer>
      <Spacer right="8px">
        <button onClick={onDone}>Done</button>
      </Spacer>
    </Menu>
  </Modal>
)

export default AddNewJournalModal
