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

type Props = {
  amountEntries: number
}

const EntryEditor = ({ amountEntries }: Props) => (
  <NegativTopMargin>
    <Row>
      <TriangleCenterer>
        <div>
          <Triangle />
        </div>
      </TriangleCenterer>
      {new Array(amountEntries - 1).fill(<TrianglePlaceholder />)}
    </Row>
    <Background>
      <button>Yes</button>
      <button>No</button>
    </Background>
  </NegativTopMargin>
)

export default EntryEditor
