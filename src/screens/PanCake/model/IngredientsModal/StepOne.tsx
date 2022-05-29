import { Button, Checkbox } from "@components"
import { Minus, PlusBtn } from "@icons"
import { Fragment, useCallback } from "react"

type Props = {
  Item?: any[]
  setSelectedItem?: (...args: any) => void
  setServing?: (...args: any) => void
  serving?: number
}
const StepOne = (Props: Props) => {
  const { Item, setSelectedItem, setServing, serving = 0 } = Props
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
    const itemIndex = Item?.findIndex(i => i.id === item?.id)
    if (itemIndex !== -1) {
      setSelectedItem?.((val: any) =>
        val?.filter((v: any) => v.id !== item?.id)
      )
    } else {
      setSelectedItem?.((val: any) => {
        return [item, ...val]
      })
    }
  }
  const getIngredients = useCallback(
    (items: any) => {
      return items?.map((item: any) =>
        item?.unit === "Cup" ? (
          <Checkbox
            onClick={() => onAddOrRemoveItem(item)}
            width={16}
            height={16}
            label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
            checked={Item?.some((selected: any) => selected?.id === item?.id)}
            icon={<img src="images/chicken.svg" alt="" />}
          />
        ) : (
          <Checkbox
            onClick={() => onAddOrRemoveItem(item)}
            width={16}
            height={16}
            label={`${getUnitVal(item?.unit)} ${item?.unit} ${item?.label}`}
            checked={Item?.some((selected: any) => selected?.id === item?.id)}
            icon={<img src="images/egg.svg" alt="" />}
          />
        )
      )
    },
    [Item, serving]
  )

  return (
    <div className="ingredientsModalContent">
      <div className="ingredientsModalHeader">
        <span className="ingredientsProduct">
          <img src="images/ingredientsImage.png" alt="" />
          Chicken-Parmesan Bundles
        </span>
        <span className="inputNumbers">
          <Minus
            className="buttonMinus"
            onClick={() => setServing?.((val: number) => val - 1)}
          />
          <span className="numText">{serving} Servings</span>{" "}
          <PlusBtn
            className="buttonPlus"
            onClick={() => setServing?.((val: number) => val + 1)}
          />
        </span>
      </div>
      <div className="ingredientsItems">
        <div className="options">
          <span className="ingredientsItemsTitle">Item to add</span>
          <span
            className="ingredientsItemsOption"
            onClick={() => {
              setSelectedItem?.([])
            }}
          >
            Deselect all
          </span>
        </div>
        {!!Item?.length ? (
          getIngredients(Item)
        ) : (
          <Fragment>
            <img src="/images/Ilustration.png" alt="Ilustration" />
            <h4>No Ingredients Added</h4>
            <span>
              Add an ingredient(s) to your shopping list from the recipe page
            </span>
          </Fragment>
        )}
      </div>
      <Button className="buttonGreen">Add {Item?.length} items</Button>
    </div>
  )
}

export default StepOne
