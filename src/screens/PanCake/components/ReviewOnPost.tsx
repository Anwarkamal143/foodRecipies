import { Button, DropDown } from "@components"
import {
  CommentIcon,
  HorizontalDotsIcon,
  LikeIcon,
  LikeSolidIcon,
  Vegan,
} from "@icons"
import { reviewsComments } from "data"
import React from "react"
import ReviewLikeModal from "../model/ReviewModal/ReviewLikeModal"
import { useOpenClose } from "@hooks"

type Props = {}

const ReviewOnPost = (props: Props) => {
  const [isOpenModel, onOpenModel, onCloseModel] = useOpenClose()

  return (
    <div className="reviewsContent">
      {reviewsComments.map((cmt: any) => {
        return (
          <div className="reviewPostItem" key={cmt._id}>
            <div className="profile">
              <div className="user">
                <div className="profileImage">
                  <div className="img">
                    <img src={cmt.profileImage} alt="" />
                  </div>
                  <span className="iconLike">
                    <LikeSolidIcon />
                  </span>
                </div>
                <p className="userName">{cmt.name}</p>
              </div>
              <DropDown
                defaultValue="By Diet"
                button={selected => (
                  <Button shape="circle" className="buttonFilter" size="small">
                    <HorizontalDotsIcon />
                  </Button>
                )}
                items={[
                  { name: "Report", icon: <Vegan /> },
                  { name: "Comment", icon: <Vegan /> },
                ]}
                renderItem={({ item, isActive, onClick }) => {
                  return (
                    <div
                      className={`${isActive} item`}
                      onClick={() => {
                        onClick(item.name)
                      }}
                    >
                      {item.name}
                    </div>
                  )
                }}
              />
            </div>
            <div className="reviewsComment">{cmt.reviewsComment}</div>
            <div className="reviewPostFooter">
              <span className="reviewCounts likes" onClick={onOpenModel}>
                <LikeIcon />
                <span className="number">{cmt.likes}</span> Likes
              </span>
              <span className="reviewCounts comments">
                <CommentIcon />
                <span className="number">{cmt.comments}</span> Comments
              </span>
            </div>
          </div>
        )
      })}
      <ReviewLikeModal isOpen={isOpenModel} onCancel={onCloseModel} />
    </div>
  )
}

export default ReviewOnPost
