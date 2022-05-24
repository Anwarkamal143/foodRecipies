import { Button, Input } from "@components"
import React, { useState } from "react"
type Props = {
  handleSave?: any
  handleClose?: any
}

const StepThree = ({ handleSave, handleClose }: Props) => {
  const [email, setEmail] = useState("")

  return (
    <div className="createListForm">
      <div className="createListFormHolder">
        <Input
          onChange={e => {
            setEmail(e.target.value)
          }}
          label="Invite by email"
          inputClasses="spacer"
          name="email"
          value={email}
          placeholder="Shopping List Name"
          // materialDesign
        />
      </div>
      <div className="createListFormButtons">
        <Button className="buttonOutlineGray" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="buttonGreen" onClick={() => handleSave?.(email)}>
          Create
        </Button>
      </div>
    </div>
  )
}

export default StepThree
