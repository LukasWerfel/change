import React, { useState } from "react"
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
  onDone: (name: string) => void
}

const AddNewJournalModal = ({ onCancel, onDone }: Props) => {
  const [inputText, setInputText] = useState("")
  return (
    <Modal>
      <Menu>
        <Spacer left="8px">
          <button onClick={onCancel}>Cancel</button>
        </Spacer>
        <Spacer right="8px">
          <button onClick={() => onDone(inputText)}>Done</button>
        </Spacer>
      </Menu>
      <form>
        <input
          value={inputText}
          placeholder="name"
          onChange={event => setInputText(event.target.value)}
        />
      </form>
    </Modal>
  )
}

export default AddNewJournalModal
