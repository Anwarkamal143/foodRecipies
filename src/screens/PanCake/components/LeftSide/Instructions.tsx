import { Button } from "@components"
import { useOpenClose } from "@hooks"
import { PlayIcon, PrintIcon, QuestionCommentIcon } from "@icons"
import React from "react"
import AskMeQuestionModal from "../../model/AskMeQuestionModal"
import VideosModal from "../../model/VideosModal"
type Props = {}

const Instructions = (props: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [isOpen, onOpen, onClose] = useOpenClose()

  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Instructions</h2>
        <Button>
          <PrintIcon /> Print
        </Button>
        <Button onClick={onOpenModel}>
          <QuestionCommentIcon /> Ask me a question
        </Button>
      </div>
      <div className="ingredientsBody">
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Gravy</strong>
          <ol>
            <li className="active">
              In a large heavy-bottomed stockpot or saute pan, melt the butter
              over medlum-high heat. Add the onions and saute, stirring es,ery
              2.3 minutes for about 30 minutes, or until the onions are
              caramelized to a deep golden brown color. (If the bottom of the
              pan starts to bum
            </li>
            <li>
              Add garlic and saute for 1-2 minutes, until fragrant. Remove from
              heat and transfer the onion mixture to a medium mixing bowl.
              Refrigerate for 1
            </li>
            <li>
              Set aside a few tablespoons of the onion mixture, which we will
              use later as a topping. Add the remaining Ingredients to the bowl
              of caramelized onions
            </li>
          </ol>
        </div>
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Chicken</strong>
          <ol>
            <li>
              In a large heavy-bottomed stockpot or saute pan, melt the butter
              over medlum-high heat. Add the onions and saute, stirring es,ery
              2.3 minutes for about 30 minutes, or until the onions are
              caramelized to a deep golden brown color. (If the bottom of the
              pan starts to bum
            </li>
            <li>
              Add garlic and saute for 1-2 minutes, until fragrant. Remove from
              heat and transfer the onion mixture to a medium mixing bowl.
              Refrigerate for 1
            </li>
            <li>
              Set aside a few tablespoons of the onion mixture, which we will
              use later as a topping. Add the remaining Ingredients to the bowl
              of caramelized onions
            </li>
          </ol>
          <Button className="buttonWhite" onClick={onOpen}>
            Watch Video Tutorial <PlayIcon />
          </Button>
        </div>
      </div>
      <AskMeQuestionModal isOpen={isOpenModel} onCancel={onCloseModel} />
      <VideosModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default Instructions
