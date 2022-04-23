import { Button, Checkbox } from "@components"
import styled from "styled-components"


type IFilterFormProps = {
    className?: string
    onSubmit?: (...args: any[]) => void
}
function FavoriteFilerForm(props: IFilterFormProps) {
    const { className, onSubmit } = props

    return (
        <div className={className}>
            <span className="Cuisine">Cuisine</span>
            <Checkbox width={16} height={16} label='American' />
            <Checkbox width={16} height={16} label='Middle Eastern' />
            <Checkbox width={16} height={16} label='Mediterranean' />
            <span className="Meal-Type">Meal Type</span>
            <Checkbox width={16} height={16} label='Side Dishes' />
            <Checkbox width={16} height={16} label='Dinner' />
            <Checkbox width={16} height={16} label='Lunch' />
            <Checkbox width={16} height={16} label='Main Course' />
            <Checkbox width={16} height={16} label='Deserts' />

            <div className="option-type">
                <Button shape="circle" size="small">
                    Apply Filters
                </Button>
            </div>
        </div>
    )
}
export default styled(FavoriteFilerForm)`
  width: 20rem;
  padding: 15px 20px 20px;
  border-radius: 10px;
  border: 1px solid #e5e8ef;
  background: #fff;

  .option-type {
    + .option-type {
      padding-top: 12px;
    }

    label {
      display: block;
      font-size: 12px;
      line-height: 20px;
      color: #7b7b7b;
      margin: 0 0 7px;
    }
  }


`
