import { Button, Checkbox, Select } from "@Components"
import { StarFillIcon } from "@Icons"
import styled from "styled-components"

const DeficultySection = ({
  stars = 1,
  className,
}: {
  stars: number
  className?: string
}) => {
  return (
    <div className={className}>
      <Checkbox width={16} height={16} />{" "}
      <span className="icons">
        {[...new Array(stars)].map(a => (
          <StarFillIcon key={a} className="star-icon" />
        ))}
      </span>
    </div>
  )
}
const Selection = styled(DeficultySection)`
  display: flex;
  align-items: center;
  .icons {
    display: flex;
  }
  .star-icon {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    &:nth-child(1) {
      margin-left: 0.5rem;
    }
  }
`
type IFilterFormProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function PostsFilerForm(props: IFilterFormProps) {
  const { className, onSubmit } = props

  return (
    <div className={className}>
      <div className="option-type">
        <label>Cook Type</label>
        <Select options={[{ value: "All Cooks", label: "All Cooks" }]} />
      </div>
      <div className="option-type">
        <label>Recipe Type</label>
        <Select options={[{ value: "All Cooks", label: "All Cooks" }]} />
      </div>
      <div className="option-type">
        <label>Diet Type</label>
        <Select options={[{ value: "All Cooks", label: "All Cooks" }]} />
      </div>
      <div className="option-type">
        <label>Cuisine type</label>
        <Select options={[{ value: "All Cooks", label: "All Cooks" }]} />
      </div>
      <div className="option-type">
        <label>Difficulty Selection</label>
        <div className="form-control">
          <Selection className="itemStars" stars={1} />
          <Selection className="itemStars" stars={2} />
          <Selection className="itemStars" stars={3} />
        </div>
      </div>
      <div className="option-type">
        <Button shape="circle" size="small">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}
export default styled(PostsFilerForm)`
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
      color: #7474a9;
      margin: 0 0 7px;
    }
  }
  
  .form-control {
    padding: 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .itemStars {
    display: flex;
    align-items: center;

    label {
      margin: 0;
    }
  }

  /* height: 30rem; */
`
