import React from "react"
import Journals from "./components/Journals/Journals"

interface Props {
  className?: string
}

const Content = ({ className }: Props) => (
  <div className={className}>
    <Journals />
  </div>
)

export default Content
