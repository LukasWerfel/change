import React from "react"
import styled from "@emotion/styled"

const DayList = styled.div({
  paddingTop: "8px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const Day = styled.span({
  flex: 1,
  textAlign: "center",
  verticalAlign: "middle",
})

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const DayOverview = () => (
  <DayList>
    {DAYS.map(day => (
      <Day key={day}>{day}</Day>
    ))}
  </DayList>
)

export default DayOverview
