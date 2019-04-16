import React from "react"
import styled from "@emotion/styled"
import { COLOR } from "../../../../../../../../variables"

const Background = styled.div({
  height: "56px",
  backgroundColor: COLOR.GREY[6],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
})

const Triangle = styled.div({
  flex: 1,
  width: 0,
  height: 0,
  border: "solid 16px",
  borderColor: `transparent transparent ${COLOR.GREY[6]} transparent`,
})

const TrianglePlaceholder = styled.div({
  flex: 1,
})

const TriangleCenterer = styled.div({
  flex: 1,
  display: "flex",
  justifyContent: "center",
})

const NegativTopMargin = styled.div({
  marginTop: "-8px",
})

const Row = styled.div({
  display: "flex",
  flexDirection: "row",
})

/* prettier breaks this code somehow */
/* TODO: investigate */
// prettier-ignore
type Props = {
  amountEntries: number,
  selectedEntry: number,
  onSuccessClick: () => void,
  onFailClick: () => void,
}

const EntryEditor = ({ amountEntries, selectedEntry, onSuccessClick, onFailClick }: Props) => {
  const triangleRow = new Array(amountEntries)
    .fill(undefined)
    .map((_, idx) => <TrianglePlaceholder key={idx} />)
  triangleRow[selectedEntry] = (
    <TriangleCenterer key="triangle">
      <div>
        <Triangle />
      </div>
    </TriangleCenterer>
  )
  return (
    <NegativTopMargin>
      <Row>{triangleRow}</Row>
      <Background>
        <button onClick={onSuccessClick}>Yes</button>
        <button onClick={onFailClick}>No</button>
      </Background>
    </NegativTopMargin>
  )
}

export default EntryEditor
