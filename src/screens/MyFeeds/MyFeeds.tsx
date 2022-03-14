import { Button, Card, DropDown, PopOver, Profile } from "@Components"
import { AddIcon, DownArrowIcon, FilterIcon } from "@Icons"
import { Page } from "@Layouts"
import { useFormik } from "formik"
import NoSSR from "react-no-ssr"
import { FeedsSlider } from "./components"
import PostSliderForm from "./components/PostsFilters/PostSliderForm"
import {
  AddStorie,
  FeedsContainer,
  FilterSection,
  HeaderCooks,
  HeaderRightSide,
  HeaderTitle,
  LeftContainer,
  RightContainer,
  SlidertWrapper,
  SuggestedCooksSection,
} from "./myfeeds.styled"
import { Post } from "./posts"
const Users = [
  {
    src: "/images/mock/slider1profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "tranding",
  },
  {
    src: "/images/mock/slider2profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
    status: "tranding",
  },
  {
    src: "/images/mock/slider3profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
  {
    src: "/images/mock/slider4profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
  {
    src: "/images/mock/slider5profile.png",
    name: "Amanda Miles",
    username: "@florinpop17",
  },
]
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
            <NoSSR>
              <FeedsSlider />
            </NoSSR>
          </SlidertWrapper>
          <FilterSection>
            <PopOver
              button={
                <Button
                  shape="circle"
                  iconLeft={<FilterIcon />}
                  iconRight={<DownArrowIcon />}
                  className="custom-button"
                  size="small"
                >
                  Filter
                </Button>
              }
            >
              <PostSliderForm />
            </PopOver>
            {/* <Filters></Filters> */}

            <span className="sortBy">
              <span>Sort by</span>
              <DropDown
                button={selected => (
                  <Button
                    shape="circle"
                    iconRight={<DownArrowIcon />}
                    size="small"
                  >
                    {selected}
                  </Button>
                )}
                items={[{ name: "New" }, { name: "Most Popular" }]}
                renderItem={({ item, isActive, onClick }) => {
                  return (
                    <div
                      className={`${isActive} item`}
                      onClick={() => onClick(item.name)}
                    >
                      {item.name}
                    </div>
                  )
                }}
              />
            </span>
          </FilterSection>

          <Post />
          <Post />
        </LeftContainer>
        <RightContainer>
          <SuggestedCooksSection>
            <Card>
              <Card.Body>
                <HeaderCooks>
                  <HeaderTitle>Suggested Cooks</HeaderTitle>
                  <HeaderRightSide>
                    <span>See All</span>
                  </HeaderRightSide>
                </HeaderCooks>
                <Profile data={Users} />
              </Card.Body>
            </Card>
          </SuggestedCooksSection>

          <SuggestedCooksSection>
            <Card>
              <Card.Body>
                <HeaderCooks>
                  <HeaderTitle>My Cooks</HeaderTitle>
                  <HeaderRightSide>
                    <span>60</span>
                  </HeaderRightSide>
                </HeaderCooks>
                <Profile data={Users} />
              </Card.Body>
            </Card>
          </SuggestedCooksSection>
        </RightContainer>
      </FeedsContainer>
    </Page>
  )
}
export const MyFeedsScreen = MyFeeds
