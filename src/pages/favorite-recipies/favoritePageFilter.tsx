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
          <img src="/images/italy.png" alt="italy" />
          <Checkbox width={16} height={16} label="American" />
        </li>
        <li>
          <img src="/images/india.png" alt="india" />
          <Checkbox width={16} height={16} label="Middle Eastern" />
        </li>
        <li>
          <img src="/images/asian.png" alt="asian" />
          <Checkbox width={16} height={16} label="Mediterranean" />
        </li>
        <li>
          <span className="category-title">Meal Type</span>
        </li>
        <li>
          <img src="/images/side-dishes.svg" alt="side-dishes" />
          <Checkbox width={16} height={16} label="Side Dishes" />
        </li>
        <li>
          <img src="/images/breakfast.svg" alt="breakfast" />
          <Checkbox width={16} height={16} label="Breakfast" />
        </li>
        <li>
          <img src="/images/lunch.svg" alt="lunch" />
          <Checkbox width={16} height={16} label="Lunch" />
        </li>
        <li>
          <img src="/images/main-course.svg" alt="main" />
          <Checkbox width={16} height={16} label="Main Course" />
        </li>
        <li>
          <img src="/images/drinks.svg" alt="drinks" />
          <Checkbox width={16} height={16} label="Drinks" />
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
      position: relative;
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

    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 18px;
      height: auto;
    }

    label {
      color: #746d6d;
      font-size: 14px;
      line-height: 18px;
      padding-left: 30px;
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
      display: block;
      color: #fff;
      background: #e0464d;
      border-radius: 20px;
      width: 100%;
      font-size: 12px;
      line-height: 15px;
      padding: 5px 15px 7px;

      .text-button {
        vertical-align: top;
      }

      &:hover {
        background: #d02a31;
        border-color: #d02a31;
      }
    }
  }
`
