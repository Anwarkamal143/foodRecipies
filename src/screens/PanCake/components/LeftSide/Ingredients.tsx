import { Button, Checkbox } from "@components"
import { useOnClickOutside, useOpenClose } from "@hooks"
import { Minus, PencilIcon, PlusBtn } from "@icons"
import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import IngredientsModal from "../../model/IngredientsModal/IngredientsModal"

type Props = {}
const Item = [
  { id: "1", unit: "Cup", label: "reduced-sodium soy sauce", type: "gravy" },
  { id: "2", unit: "Cup", label: "reduced-sodium soy sauce", type: "gravy" },
  { id: "3", unit: "tablespoon", label: "honey", type: "gravy" },
  { id: "4", unit: "tablespoon", label: "honey", type: "gravy" },
  { id: "5", unit: "Cup", label: "reduced-sodium soy sauce", type: "chicken" },
  { id: "6", unit: "Cup", label: "reduced-sodium soy sauce", type: "chicken" },
  { id: "7", unit: "tablespoon", label: "honey", type: "chicken" },
  { id: "8", unit: "tablespoon", label: "honey", type: "chicken" },
]

const Ingredients = (props: Props) => {
  const ref = useRef(null)
  const [selectedItem, setSelectedItem] = useState<any>([])

  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()
  const [isDropDownOpen, onDropDownOpen, onDropDownClose] = useOpenClose()
  const [selectedUnit, setSelectedUnit] = useState<number>(1)
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
  const onAddOrRemoveItem = (item: any) => {
    const itemIndex = selectedItem?.findIndex(i => i.id === item?.id)
    if (itemIndex !== -1) {
      setSelectedItem((val: any) => val?.filter((v: any) => v.id !== item?.id))
    } else {
      setSelectedItem((val: any) => {
        return [item, ...val]
      })
    }
  }
  const getIngredients = useCallback(
    (items: any, type: string) => {
      return items?.map(
        (item: any) =>
          type === item?.type &&
          (item?.unit === "Cup" ? (
            <Checkbox
              onClick={() => onAddOrRemoveItem(item)}
              width={16}
              height={16}
              label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
              checked={selectedItem?.some(
                (selected: any) => selected?.id === item?.id
              )}
              icon={<img src="images/chicken.svg" alt="" />}
            />
          ) : (
            <Checkbox
              onClick={() => onAddOrRemoveItem(item)}
              width={16}
              height={16}
              label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
              checked={selectedItem?.some(
                (selected: any) => selected?.id === item?.id
              )}
              icon={<img src="images/egg.svg" alt="" />}
            />
          ))
      )
    },
    [Item, serving, selectedItem, onAddOrRemoveItem]
  )
  useOnClickOutside(ref, () => {
    onDropDownClose()
  })
  return (
    <div className="ingredientsBlock">
      <div className="ingredientsBlockHead">
        <h2>Ingredients</h2>
        <span className="inputNumbers">
          <Minus onClick={() => setServing((val: number) => val - 1)} />{" "}
          <span className="numText">{serving} Servings</span>{" "}
          <PlusBtn onClick={() => setServing((val: number) => val + 1)} />
        </span>
        <div className="convertUnitsDropdownBox">
          <Button onClick={onDropDownOpen}>Convert Units</Button>
          {isDropDownOpen && (
            <span ref={ref} className="convertUnitsDropdown">
              <span
                onClick={() => setSelectedUnit(1)}
                className={classNames("item", { active: selectedUnit === 1 })}
              >
                Original <span className="icon"></span>
              </span>
              <span
                onClick={() => setSelectedUnit(2)}
                className={classNames("item", { active: selectedUnit === 2 })}
              >
                Metric <span className="icon"></span>
              </span>
              <span
                onClick={() => setSelectedUnit(3)}
                className={classNames("item", { active: selectedUnit === 3 })}
              >
                Imperial <span className="icon"></span>
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="ingredientsBody">
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Gravy</strong>
          <div className="ingredientsItems">
            {getIngredients(Item, "gravy")}
          </div>
        </div>
        <div className="ingredientsItemsHolder">
          <strong className="title">For the Chicken</strong>
          <div className="ingredientsItems">
            <div className="ingredientsItems">
              {getIngredients(Item, "chicken")}
            </div>
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
        setServing={setServing}
        Item={selectedItem}
        setSelected={setSelectedItem}
        isOpen={isOpenModel}
        onCancel={onCloseModel}
        serving={serving}
      />
    </div>
  )
}

export default Ingredients
