import { Button, Checkbox } from "@components"
import { useOpenClose } from "@hooks"
import { Minus, PencilIcon, PlusBtn } from "@icons"
import { useCallback, useState } from "react"
import IngredientsModal from "../../model/IngredientsModal/IngredientsModal"

type Props = {}
const Item = [
  { id: "1", unit: "Cup", label: "reduced-sodium soy sauce" },
  { id: "2", unit: "Cup", label: "reduced-sodium soy sauce" },
  { id: "3", unit: "tablespoon", label: "honey" },
  { id: "4", unit: "tablespoon", label: "honey" },
]
const Ingredients = (props: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [isDropDownOpen, onDropDownOpen] = useOpenClose()

  const [serving, setServing] = useState<number>(3)
  const getUnitVal = useCallback(
    (unit: "Cup" | "tablespoon") => {
      switch (unit) {
        case "Cup":
          return `1/${serving + 1}`
        case "tablespoon":
          return `${serving + 1}`
        default:
          break
      }
    },
    [serving]
  )
  const getIngredients = useCallback(
    (items: any) => {
      return items?.map((item: any) =>
        item?.unit === "Cup" ? (
          <Checkbox
            width={16}
            height={16}
            label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
            icon={<img src="images/chicken.svg" alt="" />}
          />
        ) : (
          <Checkbox
            width={16}
            height={16}
            label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
            checked
            icon={<img src="images/egg.svg" alt="" />}
          />
        )
      )
    },
    [Item, serving]
  )
  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Ingredients</h2>
        <span className="inputNumbers">
          <Minus
            className="buttonMinus"
            onClick={() => setServing((val: number) => val - 1)}
          />{" "}
          <span className="numText">{serving} Servings</span>{" "}
          <PlusBtn
            className="buttonPlus"
            onClick={() => setServing((val: number) => val + 1)}
          />
        </span>
        <div className="convertUnitsDropdownBox">
          <Button onClick={onDropDownOpen}>Convert Units</Button>
          {isDropDownOpen && (
            <span className="convertUnitsDropdown">
              <span className="item active">
                Original <span className="icon"></span>
              </span>
              <span className="item">
                Metric <span className="icon"></span>
              </span>
              <span className="item">
                Imperial <span className="icon"></span>
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="ingredientsBody">
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Gravy</strong>
          <div className="ingredientsItems">{getIngredients(Item)}</div>
        </div>
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Chicken</strong>
          <div className="ingredientsItems">
            <div className="ingredientsItems">{getIngredients(Item)}</div>
          </div>
          <Button
            className="buttonGreen"
            onClick={() => {
              onOpenModel()
            }}
          >
            Add to Shopping List <PencilIcon />
          </Button>
        </div>
      </div>
      <IngredientsModal
        Item={Item}
        serving={serving}
        setServing={setServing}
        isOpen={isOpenModel}
        onCancel={onCloseModel}
      />
    </div>
  )
}

export default Ingredients
