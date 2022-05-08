import { getPageLayout } from "@layouts"
import React,  from "react"
import styled from "styled-components"
import PanCakeScreen from "./../../screens/PanCake/index"
type Props = {
  className?: string
}

const PanCake = ({ className }: Props) => {
  return (
    <div className={className}>
      <PanCakeScreen />
    </div>
  )
}
PanCake.layout = {
  layout: getPageLayout,
  props: {
    className: "recipesPageWrapper",
    variant: "regular",
    sidebar: false,
  },
}
export default styled(PanCake)`
  padding: 10px 0 0;
  
  .followersContainer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
    border-radius: 15px;

    @media (max-width: 1199px) {
      padding: 0 40px;
    }

    @media (max-width: 1023px) {
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      padding: 0 15px;
    }
  }

  .detailsLeftColumn {
    width: calc(100% - 310px);

    @media (max-width: 1199px) {
      width: calc(100% - 275px);
    }

    @media (max-width: 1023px) {
      width: calc(100% - 235px);
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }
  
  .detailsRightColumns {
    width: 240px;
    min-width: 240px;

    @media (max-width: 1023px) {
      width: 210px;
      min-width: 210px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .ingredientsBlock {
    margin: 0 0 45px;

    .buttonGreen {
      color: #fff;
      background: #11C278;
      border-radius: 60px;
      font-size: 13px;
      line-height: 18px;
      padding: 7px 10px 9px;
      min-width: 272px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

      @media (max-width: 1023px) {
        min-width: 200px;
      }

      @media (max-width: 767px) {
        min-width: inherit;
        padding: 7px 20px 9px;
      }

      svg {
        margin: 0 0 0 5px;
        width: 10px;
        height: 10px;
      }

      &:hover {
        background: #000;
      }
    }

    .buttonWhite {
      background: #fff;
      border: 1px solid #EFEFEF;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 27.5px;
      font-size: 12px;
      line-height: 1.5;
      color: #7B7B82;
      min-width: 272px;
      padding: 7px 25px 9px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1023px) {
        min-width: 200px;
      }

      @media (max-width: 767px) {
        min-width: inherit;
        padding: 7px 20px 9px;
      }

      svg {
        width: 12px;
        height: 12px;
        color: #7B7B82;
        margin: 0 0 0 10px;
      }

      &:hover {
        background: #f7f7f7;
      }
    }
  }

  .ingredientsBlockButtons {
    display: flex;
    align-items: center;

    .buttonWhite {
      svg {
        width: 10px;
        height: 10px;
        color: #7B7B82;
      }
    }

    .buttonGreen {
      svg {
        width: 7px;
        height: 7px;

        path {
          stroke: #fff;
        }
      }
    }
  }

  .ingredientsBlockHead {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    margin: 0 0 25px;

    h2 {
      font-size: 25px;
      line-height: 1.2;
      color: #1E1E2D;
      margin: 0 28px 0 0;

      @media (max-width: 1023px) {
        margin: 0 20px 0 0;
      }

      @media (max-width: 767px) {
        width: 100%;
        margin: 0 0 15px;
      }
    }

    .inputNumbers {
      margin: 0 28px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      line-height: 1.5;
      color: #1E1E2D;

      @media (max-width: 1023px) {
        margin: 0 20px 0 0;
      }

      svg {
        width: 24px;
        height: 24px;
        margin: 0 12px;

        @media (max-width: 767px) {
          margin: 0;
        }
      }

      .numText {
        @media (max-width: 767px) {
          padding: 0 10px;
        }
      }
    }

    .button.button-default {
      background: #fff;
      border: 1px solid #EFEFEF;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 27.5px;
      font-size: 12px;
      line-height: 1.5;
      color: #7B7B82;
      min-width: 105px;
      padding: 5px 25px;

      svg {
        color: #B6B6B6;
      }

      &:hover {
        background: #f7f7f7;
      }
    }
  }

  .ingredientsBody {
    overflow: hidden;

    .title {
      display: block;
      font-size: 14px;
      line-height: 20px;
      font-wight: 400;
      color: rgba(1, 1, 1, 0.6);
      border-bottom: 1px solid #E6E6E6;
      margin: 0 0 20px;
      padding: 0 0 10px;
    }
  }

  .ingredientsItemsHolder {
    overflow: hidden;
    padding: 0 0 10px;

    ol {
	    counter-reset: item;
      font-size: 12px;
      line-height: 28px;
      color: #7B7B82;
      margin: 0 0 35px;

      li {
        display: flex;
        padding: 15px 15px 15px 0;
        border-radius: 5px;
        margin: 0 0 5px;
        
        &:before {
          font-size: 18px;
          line-height: 1.2;
          font-weight: 500;
          float: left;
          width: 40px;
          min-width: 40px;
          margin: 0 27px 0 0;
          color: #1E1E2D;
          background: #fff;
          content: counters(item, ".") " ";
          counter-increment: item;
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 2px solid #11C278;
        }

        &.active {
          background: #F9F9F9;

          &:before {
            background: #F9F9F9;
          }
        }
      }
    }
  }

  .ingredientsItems {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px;

    .checkbox {
      width: 50%;
      margin: 0 0 10px;
      padding: 0 15px 0 0;

      @media (max-width: 767px) {
        width: 100%;
        padding: 0;
      }

      label,
      .label-data {
        display: flex;
        align-items: center;
      }

      label {
        pointer-events: none;
      }

      svg {
        width: 14px;
        height: 14px;
        top: 50%;
        margin-top: -7px;
        left: 2px;
      }

      input {
        border-radius: 100%;
        width: 18px;
        height: 18px;
      }

      .icon {
        max-width: 32px;
        min-width: 32px;
        max-height: 32px;
        min-height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px 0 0;
      }

      .label-text {
        font-size: 12px;
        line-height: 1.5;
        color: #1E1E2D;
      }
    }
  }

  .detailsAsideWidget {
    background: #FFFFFF;
    border: 1px solid #E5E8EF;
    border-radius: 10px;
    padding: 15px;
    margin: 0 0 20px;

    @media (max-width: 1023px) {
      padding: 15px 10px;
    }

    .title {
      display: block;
      text-align: center;
      color: #324556;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 12px;
    }

    .pText {
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      color: #AAAAAA;
      margin: 0 0 18px;
    }

    &.textWidget {
      padding: 15px 23px;

      @media (max-width: 1023px) {
        padding: 15px;
      }

      .title {
        text-align: left;
      }

      .buttonSave {
        cursor: pointer;background: #fff;
        border: 1px solid #EFEFEF;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 27.5px;
        font-size: 11px;
        line-height: 1.5;
        color: #7B7B82;
        min-width: 110px;
        padding: 5px 20px;
        display: inline-flex;
        align-items: center;

        svg {
          color: #B6B6B6;
          width: 13px;
          height: 13px;
          margin: 0 10px 0 0;

          path {
            fill: #D4D4D4;
          }
        }

        &:hover {
          background: #f7f7f7;
        }
      }
    }
  }

  .dietPlansList {
    padding: 0 10px;

    @media (max-width: 1023px) {
      padding: 0 5px;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 12px;

      &:last-child {
        margin: 0;
      }
    }

    .infoBox {
      display: flex;
      align-items: center;
      font-size: 10px;
      line-height: 16px;
      color: #616167;

      svg {
        width: 28px;
        height: 28px;
        margin: 0 16px 0 0;

        path {
          fill: #CDCDCD;
        }

        circle,
        line {
          stroke: #CDCDCD;
        }
      }
    }

    .iconsStatus {
      
    }
  }

  .collectionsList {
    .recipeItem {
      width: 100% !important;
      display: flex;
      align-items: center;
      padding: 5px;
      position: relative;
      margin: 0 0 10px !important;

      &:last-child {
        margin: 0 !important;
      }

      img {
        width: 45px;
        min-wuidth: 45px;
        height: 50px;
        border-radius: 8px;
      }

      .recipeItemTextbox {
        padding: 0 25px 0 10px;

        .recipeTitle {
          font-size: 9px;
          line-height: 12px;
          margin: 0 0 3px;
        }

        .subTitle {
          font-size: 8px;
          line-height: 12px;
          color: #A2A2A2;
          display: block;
        }

        .icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translatY(-50%);
        }
      }
    }
  }

  .ingredientsCookHeader {
    justify-content: flex-start;
    margin-bottom: 25px;

    .userProfileImageWrap {
      border-radius: 100%;
      width: 40px;
      min-width: 40px;
      height: 40px;

      .userProfileImage {
        border-radius: 100%;
      }
    }

    .userProfileDetails {
      padding: 0 35px 0 10px
    }

    .socialIcons {
      .socialIconsItem {
        border-color: #E5E8EF;

        svg {
          path {
            fill: #BEBEBE;
          }
        }

        :hover {
          svg {
            path {
              fill: #fff;
            }
          }
        }
      }
    }
  }
`
