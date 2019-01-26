import React from "react"
import JournalList from "./components/JournalList/JournalList"

interface Props {
  className?: string
}

const Content = ({ className }: Props) => (
  <div className={className}>
    <JournalList />
  </div>
)

export default Content
