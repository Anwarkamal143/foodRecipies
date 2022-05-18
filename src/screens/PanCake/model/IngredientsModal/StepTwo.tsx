import { Button } from "@components"
import { LinkIcon } from "@heroicons/react/outline"
import { ListIcon } from "@icons"
import React from "react"

type Props = {
  setLikeStep?: any
  setSelectedItem?: any
  setItemsModal?: any
  itemsData?: any
}

const StepTwo = ({ setSelectedItem, setItemsModal, itemsData }: Props) => {
  return (
    <div className="ingredientsItemsList">
      <div className="items">
        {itemsData?.map(e => (
          <span className="ingredientsItems"
            onClick={() => {
              setSelectedItem?.(e)
              setItemsModal?.(1)
            }}
            key={e.id}
          >
            <strong className="title"><ListIcon className="listIcon"/> {e.list} <span className="linkIcon"><LinkIcon /></span></strong>
            <span className="itemNumbers">0 items</span>
          </span>
        ))}
      </div>
      <Button className="buttonOutlineGray" onClick={() => setItemsModal?.(3)}>Create new list</Button>
    </div>
  )
}

export default StepTwo
