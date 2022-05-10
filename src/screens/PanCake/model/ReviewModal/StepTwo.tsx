import { Button } from "@components"
import React, { useState } from "react"

type Props = {
  setLikeStep?: any
}

const StepTwo = ({ setLikeStep }: Props) => {
  const [file, setFile] = useState<any>(null)

  return (
    <div className="ctm-tags">
      <div className="file-upload">
        {file && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(file)}
            />
          </div>
        )}
        <input
          type="file"
          name="file"
          onChange={(e: any) => setFile(e?.target?.files[0])}
        />
      </div>
      <div className="taste-tag">
        <p>How did ity taste?</p>
        <div className="tag">
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
        </div>
      </div>
      <div className="taste-tag">
        <p>What was good about it?</p>
        <div className="tag">
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
          <span>Delicious</span>
        </div>
      </div>
      <div className="taste-tag">
        <p>Would you make it again?</p>
        <div className="tag">
          <span>Delicious</span>
          <span>Delicious</span>
        </div>
      </div>
      <div className="notes">
        <p>Notes</p>
        <span>
          Share more about your experience. Any tips for improving this recipe?
        </span>
      </div>
      <Button onClick={() => setLikeStep("2")}>Save Note</Button>
    </div>
  )
}

export default StepTwo
