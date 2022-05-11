import { Button, Input } from "@components"
import React, { useState } from "react"
type Props = {
  handleSave?: any
  handleClose?: any
}

const StepThree = ({ handleSave, handleClose }: Props) => {
  const [email, setEmail] = useState("")

  return (
    <div className="Macronutrients">
      <Input
        onChange={e => {
          setEmail(e.target.value)
        }}
        label="Invite by email"
        inputClasses="spacer"
        name="email"
        value={email}
        // materialDesign
      />
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={() => handleSave?.(email)}>Create</Button>
    </div>
  )
}

export default StepThree
