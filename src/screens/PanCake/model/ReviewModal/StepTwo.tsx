import { Button } from "@components"
import { CameraIcon } from "@icons"
import { useState } from "react"

type Props = {
  setCurrentStep?: any
}

const StepTwo = ({ setCurrentStep }: Props) => {
  const [file, setFile] = useState<any>(null)

  return (
    <div className="reviewsModalTags">
      <label className="file-upload">
        {file && (
          <div className="imagePlaceholder">
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(file)}
            />
          </div>
        )}
        <div className="customItems">
          <CameraIcon />
          <span className="textLabel">Add Photo</span>
        </div>
        <input
          type="file"
          name="file"
          onChange={(e: any) => setFile(e?.target?.files[0])}
        />
      </label>
      <div className="reviewsTagsRow">
        <strong className="title">How did ity taste?</strong>
        <ul className="tagsList">
          <li>Delicious</li>
          <li>Sweet</li>
          <li>Spicy</li>
          <li>Bland</li>
          <li>Moist</li>
          <li>Crispy</li>
          <li>Fresh</li>
        </ul>
      </div>
      <div className="reviewsTagsRow">
        <strong className="title">What was good about it?</strong>
        <ul className="tagsList">
          <li>Easy</li>
          <li>Kid-friendly</li>
          <li>Under 30 Mins</li>
          <li>Makes leftovers</li>
        </ul>
      </div>
      <div className="reviewsTagsRow">
        <strong className="title">Would you make it again?</strong>
        <ul className="tagsList">
          <li>Go-to</li>
          <li>Never again</li>
          <li>Special occasion</li>
        </ul>
      </div>
      <div className="notesForm">
        <strong className="title">Notes</strong>
        <textarea
          cols={30}
          rows={10}
          placeholder="Share more about your experience. Any tips for improving this recipe?"
        ></textarea>
      </div>
      <Button className="buttonGreen">Save Note</Button>
    </div>
  )
}

export default StepTwo
