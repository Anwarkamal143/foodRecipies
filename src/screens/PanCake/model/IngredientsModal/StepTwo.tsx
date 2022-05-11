import { Button } from "@components"
import React from "react"

type Props = {
  setLikeStep?: any
  setSelectedItem?: any
  setItemsModal?: any
  itemsData?: any
}

const StepTwo = ({ setSelectedItem, setItemsModal, itemsData }: Props) => {
  return (
    <div className="ctm-tags">
      <div className="items">
        {itemsData?.map(e => (
          <span
            onClick={() => {
              setSelectedItem?.(e)
              setItemsModal?.(1)
            }}
            key={e.id}
          >
            {e.list}
          </span>
        ))}
      </div>
      <Button onClick={() => setItemsModal?.(3)}>Create new list</Button>
    </div>
  )
}

export default StepTwo
