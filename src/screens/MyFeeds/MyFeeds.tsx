import { Button } from "@Components"
import { AddIcon, DownArrowIcon, FilterIcon } from "@Icons"
import { Page } from "@Layouts"
import { useFormik } from "formik"
import { FeedsSlider, Filters } from "./components"
import {
  AddStorie,
  FeedsContainer,
  FilterSection,
  LeftContainer,
  RightContainer,
  SlidertWrapper,
} from "./myfeeds.styled"
import { Post } from "./posts"

type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function MyFeeds(props: IMyFeedProps) {
  const { className, onSubmit } = props
  const {
    values,
    handleSubmit,
    isSubmitting,

    setFieldValue,
  } = useFormik({
    initialValues: {
      opts: {},
    },
    onSubmit: values => {
      onSubmit?.(true)
    },
  })

  return (
    <Page nossr>
      <FeedsContainer className={className}>
        <LeftContainer>
          <SlidertWrapper>
            <AddStorie>
              <AddIcon />
              Add Story
            </AddStorie>
            {/* <NoSSR> */}
            <FeedsSlider />
            {/* </NoSSR> */}
          </SlidertWrapper>
          <FilterSection>
            <Filters>
              <Button
                shape="circle"
                iconLeft={<FilterIcon />}
                iconRight={<DownArrowIcon />}
                className="custom-button"
                size="small"
              >
                Filter
              </Button>
            </Filters>

            <span className="sortBy">
              <span>Sort by</span>
              <Button shape="circle" iconRight={<DownArrowIcon />} size="small">
                Most Popular
              </Button>
            </span>
          </FilterSection>

          <Post />
          <Post />
        </LeftContainer>
        <RightContainer>Right</RightContainer>
      </FeedsContainer>
    </Page>
  )
}
export const MyFeedsScreen = MyFeeds
