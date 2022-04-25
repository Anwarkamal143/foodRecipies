import { Button, Checkbox } from "@components"
import styled from "styled-components"

type IFilterFormProps = {
  className?: string
  onSubmit?: (...args: any[]) => void
}
function FavoriteFilerForm(props: IFilterFormProps) {
  const { className, onSubmit } = props

  return (
    <div className={`${className}`}>
      <ul className="filtersDropdownList">
        <li>
          <span className="category-title">Cuisine</span>
        </li>
        <li>
          <Checkbox width={16} height={16} label="American" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Middle Eastern" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Mediterranean" />
        </li>
        <li>
          <span className="category-title">Meal Type</span>
        </li>
        <li>
          <Checkbox width={16} height={16} label="Side Dishes" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Dinner" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Lunch" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Main Course" />
        </li>
        <li>
          <Checkbox width={16} height={16} label="Deserts" />
        </li>
      </ul>
      <div className="filtersDropdownbutton">
        <Button shape="circle" size="small">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
export default styled(FavoriteFilerForm)`
  position: absolute;
  width: 266px;
  background: #fff;
  border: 1px solid #e5e8ef;
  box-shadow: 0 10px 40px #818181;
  border-radius: 15px;
  margin-top: 5px;
  padding: 10px 25px;

  .filtersDropdownList {
    list-style: none;
    padding: 0 0 15px;
    margin: 0;
    line-height: 0;

    li {
      padding: 10px 0;
    }

    .category-title {
      display: block;
      color: #1e1e2d;
      font-size: 12px;
      line-height: 20px;
      padding-top: 5px;
    }

    .checkbox {
      width: 100%;

      svg {
        left: auto;
        right: 0;
        z-index: 1;
      }
    }

    label {
      color: #7474a9;
      font-size: 10px;
      line-height: 14px;
      cursor: pointer;
      justify-content: space-between;

      .label-data {
        order: 1;
        padding: 0 10px 0 0;
      }

      input {
        order: 2;
      }
    }
  }

  .filtersDropdownbutton {
    overflow: hidden;
    text-align: center;
    padding: 0 0 12px;

    .button-default.button-sm {
      width: 124px;
      height: 40px;
      color: #fff;
      background: #e0464d;
      border-radius: 20px;
      font-sze: 14px;
      line-height: 18px;
      padding: 7px 15px 13px;

      &:hover {
        background: #d02a31;
        border-color: #d02a31;
      }
    }
  }
`
