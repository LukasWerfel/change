import React from "react"
import JournalList from "./components/JournalList/JournalList"
import { journalFactory } from "../../types"

interface Props {
  className?: string
}

const Content = ({ className }: Props) => (
  <div className={className}>
    <JournalList journalList={[journalFactory.build()]} />
  </div>
)

export default Content
