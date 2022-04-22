import {
  Button,
  Card,
  DropDown,
  PopOver,
  PreviewSlider,
  ProfileItem
} from "@components"
import { AngleRight, DownArrowIcon, FilterIcon } from "@icons"
import { RecipesData, Users } from "@redux/data"
import { useFormik } from "formik"
import { useState } from "react"
import NoSSR from "react-no-ssr"
import { FeedsSlider } from "./components"
import PostSliderForm from "./components/PostsFilters/PostSliderForm"
import {
  FeedsContainer,
  FeedsWidget,
  FilterSection,
  HeaderCooks,
  HeaderRightSide,
  HeaderTitle,
  LeftContainer,
  RightContainer,
  SlidertWrapper,
  SuggestedCooksSection
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
  const [posts, setPosts] = useState([...RecipesData])
  const [giftModal, setGiftModal] = useState(true)
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
<>
      <FeedsContainer className={className}>
        <LeftContainer>
          <SlidertWrapper>
            {/* <AddStorie>
              <AddIcon />
              Add Story
            </AddStorie> */}
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
          {giftModal && (
            <FeedsWidget>
              <div className="head">
                <div className="img-icon">
                  <img src="/images/mock/flame.png" alt="flame" />
                </div>
                <span className="title">Trending</span>
                <span className="close" onClick={() => setGiftModal(false)}>
                  <span className="close-icon"></span>
                </span>
              </div>
              <div className="content">
                <a href="#" className="link">
                  Patrick Kirk
                </a>{" "}
                and{" "}
                <a href="#" className="link">
                  2 others
                </a>{" "}
                posted trending recipes today.
              </div>
            </FeedsWidget>
          )}
          <SuggestedCooksSection className="feedsColumn">
            <Card>
              <Card.Body>
                <HeaderCooks className="feedsWidgetHeader">
                  <HeaderTitle>Suggested Cooks</HeaderTitle>
                  <HeaderRightSide className="feedsWidgetSeeAll">
                    <span>
                      See All <AngleRight />
                    </span>
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
                    <a href="#">60</a>
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
</>
  )
}
export const MyFeedsScreen = MyFeeds
