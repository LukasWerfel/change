import React from "react"
import JournalList from "./components/JournalList/JournalList"
import { journalFactory, entryFactory } from "../../types"

interface Props {
  className?: string
}

const Content = ({ className }: Props) => (
  <div className={className}>
    <JournalList
      journalList={[
        journalFactory.build({
          entries: [entryFactory.build()],
        }),
      ]}
    />
  </div>
)

export default Content
