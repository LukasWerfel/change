import React, { useState } from "react"
import styled from "@emotion/styled"
import EntryEditor from "./components/EntryEditor/EntryEditor"
import { COLOR } from "../../../../../../variables"
import { Journal as JournalType, Entry as EntryType } from "../../../../../../types"

type EntryProps = {
  entry: EntryType | undefined
}

const Entry = styled.div(
  {
    height: "24px",
    boxShadow: "inset 0 0 1px #000000",
    flex: 1,
    ":first-of-type": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    ":last-child": {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },
  ({ entry }: EntryProps) => ({
    backgroundColor: entry && entry.status === "SUCCEEDED" ? COLOR.GREEN[5] : COLOR.RED[5],
  }),
)

const EntryList = styled.div({
  paddingTop: "8px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const NUMBER_OF_ENTRIES_SHOWN = 7

const getDateOfDaysAgo = (daysAgo: number) => {
  const today = new Date()
  const dateDaysAgo = new Date()
  dateDaysAgo.setDate(today.getDate() - daysAgo)
  return dateDaysAgo.toISOString().slice(0, 10)
}

type Props = {
  journal: JournalType
}

const Journal = ({ journal }: Props) => {
  const [showEntryEditor, setShowEntryEditor] = useState(false)

  const recentEntries = new Array(NUMBER_OF_ENTRIES_SHOWN).fill(undefined).map((_, idx) => {
    const date = getDateOfDaysAgo(idx)
    const entry = journal.entries.find(entry => entry.date === date)
    return {
      date,
      entry,
    }
  })
  return (
    <div>
      <div onClick={() => setShowEntryEditor(!showEntryEditor)}>
        <span>{journal.name}</span>
        <EntryList>
          {recentEntries.map(({ entry, date }) => (
            <Entry
              data-testid={`Entry-${date}-${
                entry && entry.status === "SUCCEEDED" ? "Succeeded" : "Failed"
              }`}
              key={date}
              entry={entry}
            />
          ))}
        </EntryList>
      </div>
      {showEntryEditor && <EntryEditor />}
    </div>
  )
}

export default Journal
