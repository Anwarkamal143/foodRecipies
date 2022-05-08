import { Button, DropDown } from "@components"
import { Calander, LikeIcon, Vegan } from "@icons"
import { reviewsComments } from "data"
import React from "react"
type Props = {}

const ReviewOnPost = (props: Props) => {
  return (
    <div>
      {reviewsComments.map((cmt: any) => {
        return (
          <div className="reviewCtn" key={cmt._id}>
            <div className="profile">
              <div className="user">
                <div className="profileImage">
                  <img src={cmt.profileImage} alt="" />
                  <LikeIcon />
                </div>
                <p>{cmt.name}</p>
              </div>
              <DropDown
                defaultValue="By Diet"
                button={selected => (
                  <Button shape="circle" className="buttonFilter" size="small">
                    <Calander />
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
            <div className="footer">
              <span className="likes">
                <LikeIcon />
                {cmt.likes} Likes
              </span>
              <span className="comments">
                <LikeIcon />
                {cmt.comments} Comments
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewOnPost
