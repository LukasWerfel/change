import * as Factory from "factory.ts"
import aguid from "aguid"

/* prettier breaks this code somehow */
/* TODO: investigate */
// prettier-ignore
export type Entry = {
  date: string,
  status: "SUCCEEDED" | "FAILED",
}

export const entryFactory = Factory.Sync.makeFactory<Entry>({
  date: Factory.each(i => new Date().toISOString().slice(0, 10)),
  status: "SUCCEEDED",
})

/* prettier breaks this code somehow */
/* TODO: investigate */
// prettier-ignore
export type Journal = {
  id: string,
  name: string,
  entries: Array<Entry>,
}

export const journalFactory = Factory.Sync.makeFactory<Journal>({
  id: Factory.each(i => aguid(`${i}`)),
  name: "create oss pr",
  entries: [],
})
