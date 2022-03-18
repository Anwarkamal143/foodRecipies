import {
  Button,
  Card,
  DropDown,
  PopOver,
  PreviewSlider,
  ProfileItem,
} from "@components"
import { AddIcon, DownArrowIcon, FilterIcon } from "@icons"
import { Page } from "@layouts"
import { useFormik } from "formik"
import { useState } from "react"
import NoSSR from "react-no-ssr"
import { Users } from "../../../data"
import { POSTSDATA } from "../data"
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

type IMyFeedProps = {
  className?: string
  //   title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  //   subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function MyFeeds(props: IMyFeedProps) {
  const { className, onSubmit } = props
  const [posts, setPosts] = useState([...POSTSDATA])
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
                  className="custom-button buttonFilter"
                  size="small"
                >
                  Filter
                </Button>
              }
            >
              <PostSliderForm />
            </PopOver>
            {/* <Filters></Filters> */}

            <span className="sortBy sortByFilter">
              <span className="sortByFilterlbl">Sort by</span>
              <DropDown
                button={selected => (
                  <Button
                    shape="circle"
                    iconRight={<DownArrowIcon />}
                    className="buttonFilter"
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
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              onSubmit={post => {
                const newPosts = [...posts]
                const index = newPosts.findIndex(p => p._id === post._id)
                if (index !== -1) {
                  newPosts[index] = post
                  setPosts(posts => newPosts)
                }
              }}
            />
          ))}
        </LeftContainer>
        <RightContainer className="feedsMainColumn">
          <SuggestedCooksSection className="feedsColumn">
            <Card>
              <Card.Body>
                <HeaderCooks className="feedsWidgetHeader">
                  <HeaderTitle>Suggested Cooks</HeaderTitle>
                  <HeaderRightSide className="feedsWidgetSeeAll">
                    <span>See All</span>
                  </HeaderRightSide>
                </HeaderCooks>
                <ProfileItem data={Users} />
              </Card.Body>
            </Card>
          </SuggestedCooksSection>

          <SuggestedCooksSection className="feedsColumn">
            <Card>
              <Card.Body>
                <HeaderCooks className="feedsWidgetHeader">
                  <HeaderTitle>My Cooks</HeaderTitle>
                  <HeaderRightSide className="feedsWidgetCount">
                    <span>60</span>
                  </HeaderRightSide>
                </HeaderCooks>
                <ProfileItem data={Users} />
              </Card.Body>
            </Card>
          </SuggestedCooksSection>
        </RightContainer>
      </FeedsContainer>
      <NoSSR>
        <PreviewSlider />
      </NoSSR>
    </Page>
  )
}
export const MyFeedsScreen = MyFeeds
