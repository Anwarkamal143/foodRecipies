import { getPageLayout } from "@layouts"
import React from "react"
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
    margin: 0 auto 100px;
    padding: 50px 80px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
    border-radius: 15px;

    @media (max-width: 1199px) {
      padding: 0 40px;
      box-shadow: none;
      border-radius: 0;
      margin-bottom: 20px;
    }

    @media (max-width: 1023px) {
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      padding: 0 15px;
    }
  }

  .ingredientsCookHeader {
    .ingredientsCookHeaderRight {
      .copyLinkButton {
        display: flex;
      }
    }
  }

  .organizedByList {
    list-style: none;
    padding: 0;
    margin: 0 -7px 5px;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    font-size: 12px;
    line-height: 1.5;

    @media (max-width: 767px) {
      font-size: 10px;
      margin: 0 -4px 12px;
    }

    li {
      margin: 0 7px 15px;

      @media (max-width: 767px) {
        margin: 0 4px 8px;
      }

      &:first-child {
        @media (max-width: 767px) {
          width: calc(100% - 8px);
          margin-bottom: 10px;
        }
      }

      .title {
        display: block;
        color: #000;
        opacity: 0.5;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      a {
        display: block;
        background: #ffdedf;
        color: #1E1E2D;
        font-size: 11px;
        padding: 5px 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: all 0.25s ease;

        @media (max-width: 767px) {
          font-size: 9px;
        }

        &:hover {
          background: #ffa3a7;
        }
      }
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
      display: none;
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
        padding: 8px 20px;
        width: 100%;
        font-size: 10px;
        line-height: 14px;
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
        padding: 8px 20px;
        width: 100%;
        font-size: 10px;
        line-height: 14px;
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
        font-size: 18px;
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
        border-radius: 100%;
        cursor: pointer;
        transition: all 0.25s ease-in-out;

        @media (max-width: 767px) {
          margin: 0;
          width: 18px;
          heightL 18px;
        }

        path {
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          path {
            + path {
              fill: #fff;
            }
          }
        }

        &.buttonMinus {
          &:hover {
            background: #FE585F;
          }
        }

        &.buttonPlus {
          &:hover {
            background: #11C278;
          }
        }
      }

      .numText {
        @media (max-width: 767px) {
          padding: 0 10px;
        }
      }
    }

    .convertUnitsDropdownBox {
      position: relative;
      z-index: 1;

      .convertUnitsDropdown {
        position: absolute;
        left: 0;
        top: 100%;
        margin-top: 5px;
        width: 146px;
        background: #fff;
        box-shadow: 0 4px 28px -10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 15px 20px;
        border: 1px solid #EFEFEF;

        .item {
          display: block;
          position: relative;
          font-size: 14px;
          line-height: 20px;
          color: #4F4F4F;
          padding: 8px 0;
          cursor: pointer;

          .icon {
            width: 14px;
            height: 14px;
            border: 2px solid #E0E0E0;
            border-radius: 100%;
            display: block;
            position: absolute;
            right: -5px;
            top: 50%;
            transform: translateY(-50%);

            &:after {
              width: 6px;
              height: 6px;
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              margin: -3px 0 0 -3px;
              background: #fff;
              border-radius: 100%;
            }
          }

          &:hover,
          &.active {
            .icon {
              border-color: #6FCF97;

              &:after {
                background: #6FCF97;
              }
            }
          }
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

      @media (max-width: 767px) {
        font-size: 10px;
      }

      svg {
        color: #B6B6B6;
      }

      &:hover {
        background: #f7f7f7;
      }

      &.calculatorButton {
        .text-button {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 18px;
            height: 18px;
            display: block;
            margin: 0 5px 0 0;
          }
        }
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

      @media (max-width: 767px) {
        font-size: 10px;
        line-height: 18px;
      }

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

          @media (max-width: 767px) {
            font-size: 12px;
            line-height: 18px;
            margin: 0 12px 0 0;
            width: 34px;
            min-width: 34px;
          }
        }

        &:hover {
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

      .label-data {
        @media (max-width: 767px) {
          padding-left: 15px;
        }
      }

      label {
        cursor: pointer;
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

        @media (max-width: 767px) {
          max-width: 28px;
          min-width: 28px;
          max-height: 28px;
          min-height: 28px;
        }
      }

      .label-text {
        font-size: 12px;
        line-height: 1.5;
        color: #1E1E2D;

        @media (max-width: 767px) {
          font-size: 10px;
        }
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
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #324556;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 12px;
      cursor: pointer;
      transition: all 0.25s ease-in-out;

      svg {
        opacity: 0;
        position: relative;
        left: 0;
        transition: all 0.25s ease-in-out;

        path {
          stroke: #e0464d;
        }
      }

      &:hover {
        color: #e0464d;

        svg {
          opacity: 1;
          left: 5px;
        }
      }
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
      padding: 7px;
      position: relative;
      margin: 0 0 10px !important;

      &:last-child {
        margin: 0 !important;
      }

      img {
        width: 45px;
        min-width: 45px;
        height: 45px;
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
      padding: 0 25px 0 10px
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

  .aboutCookBlock {
    padding: 30px 0 50px;

    @media (max-width: 767px) {
      display: none;
    }

    .ingredientsCookHeader {
      .person-details {
        border: 0;
        margin: 0 10px 0 0;
      }

      .userProfileName {
        font-size: 13px;
        color: #1E1E2D;
        position: relative;
        cursor: pointer;
        transition: all 0.25s ease;

        &:after {
          position: absolute;
          right: 0;
          top: calc(50% - 3px);
          width: 10px;
          height: 10px;
          font-weight: 400;
          content: '';
          opacity: 0;
          transition: all 0.25s ease-in-out;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M4.62156 2.49956H0.378924' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
        }

        &:hover {
          color: #e0464d;

          &:after {
            right: -15px;
            opacity: 1;
          }
        }
      }

      .userProfileTime {
        font-size: 10px;
        color: #A2A2A2;
      }
      
      .ingredientsCookHeaderLeft {
        .ingredientsCookHeaderButtons {
          display: none;
        }
      }

      .ingredientsCookHeaderRight {
        .copyLinkButton {
          display: none;
        }
      }
    }
  }

  .nutritionBlock {
    padding: 0 0 25px;

    @media (max-width: 767px) {
      padding: 0;
    }
    
    .ingredientsBlockHead {
      h2 {
        font-size: 36px;

        @media (max-width: 1023px) {
          font-size: 28px;
        }

        @media (max-width: 767px) {
          font-size: 16px;
        }
      }
    }
  }

  .nutritionProgressBar {
    display: flex;
    justify-content: space-between;
    padding: 20px 50px 0 0;

    @media (max-width: 767px) {
      padding: 0;
    }

    .nutritionProgressBox {
      width: 90px;

      @media (max-width: 767px) {
        width: 50px;
      }

      &.Carbs {
        .CircularProgressbar {
          .CircularProgressbar-text {
            fill: #11C278;
          }
        }
      }

      &.Fat {
        .CircularProgressbar {
          .CircularProgressbar-text {
            fill: #FE585F;
          }
        }
      }

      &.Protein {
        .CircularProgressbar {
          .CircularProgressbar-text {
            fill: #FEC745;
          }
        }
      }

      &.Calories {
        .CircularProgressbar {
          .CircularProgressbar-text {
            fill: #11C278;
            display: none;
          }
        }
      }
    }

    .nutritionTitle {
      display: block;
      text-align: center;
      font-size: 16px;
      line-height: 1.3;
      color: #030303;
      margin: 0 0 15px;
      
      @media (max-width: 767px) {
        font-size: 10px;
        color: #979797;
        margin: 0 0 10px;
      }
    }

    .nutritionText {
      display: block;
      font-size: 13px;
      line-height: 20px;
      color: #6F7774;
      text-align: center;
      padding: 15px 0 0;

      @media (max-width: 767px) {
        font-size: 10px;
        line-height: 14px;
        padding: 10px 0 0;
      }
    }

    .CircularProgressbar {
      .CircularProgressbar-text {
        font-size: 13px;
        line-height: 20px;
        position: absolute;
        left: 0;
        top: 100px;

        @media (max-width: 767px) {
          font-size: 18px;
          line-height: 1;
        }
      }
    }
  }

  .recipeTagsBlock {
  }

  .recipeTagsList {
    list-style: none;
    padding: 0;
    margin: -5px -7px 55px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 767px) {
      margin: -15px -5px 55px;
    }

    li {
      padding: 0 7px;

      @media (max-width: 767px) {
        padding: 0 5px;
      }

      a {
        display: block;
        border: 1px solid #11C278;
        border-radius: 20px;
        color: #11C278;
        font-size: 13px;
        line-height: 20px;
        padding: 5px 15px;
        text-align: center;
        transition: all 0.25s ease-in-out;

        @media (max-width: 767px) {
          font-size: 9px;
          line-height: 15px;
          padding: 4px 10px;
        }

        &:hover {
          color: #fff;
          background: #11C278;
        }
      }
    }
  }

  .makeRecipeBlock {
    padding: 30px;
    background: #fff;
    border: 1px solid #E5E8EF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      padding: 15px;
    }

    @media (max-width: 767px) {
      padding: 0;
      border: 0;
      box-shadow: none;
    }

    .img-holder {
      width: 130px;
      min-width: 100px;
      height: 112px;
      overflow: hidden;
      border-radius: 10px;

      @media (max-width: 1023px) {
        width: 90px;
        min-width: 90px;
        height: 90px;
      }

      @media (max-width: 767px) {
        display: none;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 10px;
        object-fit: cover;
        object-position: center;
      }
    }

    .textbox {
      flex-grow: 1;
      flex-basis: 0;
      padding: 0 0 0 20px;

      @media (max-width: 1023px) {
        padding: 0 0 0 10px;
      }

      @media (max-width: 767px) {
        padding: 0;
        display: flex;
        flex-flow: row wrap;
      }
    }

    .makeRecipeBlockHead {
      display: flex;
      align-items: center;
      margin: 0 0 20px;

      @media (max-width: 767px) {
        order: 2;
        width: 100%;
      }

      svg {
        min-width: 24px;
        margin: 0 18px 0 0;

        @media (max-width: 1023px) {
          width: 18px;
          height: 18px;
          min-width: 18px;
          margin: 0 10px 0 0;
        }

        @media (max-width: 767px) {
          display: none;
        }
      }

      h3 {
        font-size: 18px;
        line-heght: 1.5;
        color: #000;
        margin: 0;

        @media (max-width: 1023px) {
          font-size: 14px;
        }

        @media (max-width: 767px) {
          display: none;
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
        padding: 5px 15px 5px 20px;
        margin-left: auto;

        @media (max-width: 1023px) {
          padding: 5px 15px;
        }

        @media (max-width: 767px) {
          width: 48%;
          font-size: 10px;
          line-height: 14px;
          padding: 8px 20px;
        }

        svg {
          color: #B6B6B6;
          margin: 0 0 0 10px;
          min-width: auto;
          position: relative;
          top: -1px;
        }

        &:hover {
          background: #f7f7f7;
        }

        &.buttonGreen {
          color: #fff;
          background: #11C278;
          border-radius: 60px;
          font-size: 13px;
          line-height: 18px;
          padding: 7px 10px 9px;
          min-width: 272px;
          display: none;
          align-items: center;
          border-color: #11C278;
          justify-content: center;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

          @media (max-width: 767px) {
            min-width: inherit;
            padding: 8px 20px;
            width: 48%;
            font-size: 10px;
            line-height: 14px;
            display: flex;
          }

          svg {
            margin: 0 0 0 5px;
            width: 10px;
            height: 10px;
          }

          &:hover {
            background: #000;
            border-color: #000;
          }
        }
      }
    }

    .makeRecipeForm {
      display: flex;
      align-items: center;

      @media (max-width: 767px) {
        order: 1;
        margin: 0 0 16px;
        width: 100%;
      }

      .icon {
        width: 34px;
        height: 34px;
        border-radius: 100%;
        background: #7474A9;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px 0 -5px;

        @media (max-width: 1023px) {
          width: 24px;
          height: 24px;
          font-size: 12px;
          margin: 0 10px 0 0;
        }

        @media (max-width: 767px) {
          width: 28px;
          height: 28px;
          background: #C4C4C4;
        }
      }

      .text-input {
        margin: 0;
      }

      .materialized-input {
        margin: 0 30px 0 0;

        @media (max-width: 1023px) {
          margin: 0 20px 0 0;
        }
        
        label {
          display: none;
        }
        
        .form-control {
          width: 288px;
          font-size: 14px;
          line-height: 20px;
          padding: 8px 17px;
          border-color: #E3E3E3;
          border-radius: 20px;
          color: rgba(142, 142, 150, 0.6);

          @media (max-width: 1023px) {
            width: 250px;
          }

          @media (max-width: 767px) {
            height: 28px;
            font-size: 10px;
            line-height: 16px;
            padding: 5px 12px;
          }
        }
      }
    }
  }

  .reviewsContent {
    padding: 60px 0 0;

    @media (max-width: 767px) {
      padding: 30px 0 0;
    }
  }

  .reviewPostItem {
    margin: 0 0 50px;
    
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .button.button-sm.buttonFilter {
        border: 0;
        min-width: 50px;
        border: 0;
        box-shadow: none; 
      }

      .sortByFilterDrop {
        width: 140px;
        background: #fff;
        box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 7px 10px;

        .item {
          font-size: 12px;
          line-height: 1.5;
          color: #424E66;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.25s ease-in-out;

          &:hover {
            background: #f8f8f8;
          }
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .userName {
        display: block;
        font-size: 13px;
        line-height: 1.5;
        color: #1E1E2D;
      }
    }

    .profileImage {
      position: relative;
      margin: 0 15px 0 0;

      img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 100%;

        @media (max-width: 767px) {
          width: 32px;
          height: 32px;
        }

        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .iconLike {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        position: absolute;
        right: -5px;
        bottom: -5px;
        background: #11C278;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 767px) {
          width: 16px;
          height: 16px;
        }
      }
    }

    .reviewsComment {
      font-size: 14px;
      line-height: 1.5;
      color: rgba(30, 30, 45, 0.7);
      padding: 3px 0 0 65px;
      margin: 0 0 35px;

      @media (max-width: 767px) {
        font-size: 11px;
        padding: 3px 0 0 50px;
        margin: 0 0 20px;
      }
    }

    .reviewPostFooter {
      display: flex;
      align-items: center;
      padding: 0 0 0 55px;

      @media (max-width: 767px) {
        padding: 0 0 0 50px;
      }

      .reviewCounts {
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 20px;
        color: #1E1E2D;
        cursor: pointer;

        @media (max-width: 767px) {
          font-size: 11px;
          line-height: 1.5;
        }

        svg {
          width: 20px;
          height: 20px;
          margin: 0 10px 0 0;
          cursor: pointer;

          @media (max-width: 767px) {
            width: 16px;
            height: 16px;
          }

          path {
            stroke: #1E1E2D;
            transition: all 0.25s ease-in-out;
          }

          &:hover {
            path {
              stroke: #e0464d;
            }
          }
        }

        .number {
          margin: 0 5px 0 0;
        }

        &.likes {
          margin-right: 50px;
        }
      }
    }
  }

  .recommendedRecipesBlock {
    overflow: hidden;
    margin: 0 -60px;
    padding: 60px 60px 40px;

    @media (max-width: 767px) {
      padding: 0 60px 10px;
    }

    h2 {
      font-size: 33px;
      line-height: 1.2;
      margin: 0 0 30px;
      color: #1E1E2D;

      @media (max-width: 1023px) {
        font-size: 28px;
      }

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }

    .slick-slider .slick-slide {
      padding: 0 14px 5px 0;
    }
  }

  .sectionDetailsHeader {
    h1 {
      color: #1E1E2D;
      font-size: 36px;
      line-height: 1.3;
      margin: 0 0 20px;

      @media (max-width: 1199px) {
        font-size: 32px;
      }

      @media (max-width: 1023px) {
        font-size: 28px;
      }

      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 1.5;
      }
    }
  }

  .sectionDetailsContent {
    .postFeed {
      &.feedsWidget {
        border: 0;
        border-radius: 0;
        padding: 0;

        .ingredientsCookHeader {
          justify-content: space-between;

          .person-details,
          .socialIcons {
            @media (max-width: 767px) {
              width: auto;
              margin: 0;
            }
          }

          .person-details {
            @media (max-width: 767px) {
              min-width: 150px;
              margin: 0 25px 0 0;
            }
          }
          
          .userProfileImageWrap {
            transition: all 0.25s ease;
            cursor: pointer;
            
            @media (max-width: 767px) {
              width: 22px;
              height: 22px;
              min-width: 22px;
            }

            &:hover {
              transform: scale(1.1);
            }
          }

          .userProfileName {
            position: relative;
            cursor: pointer;
            transition: all 0.25s ease;

            @media (max-width: 767px) {
              font-size: 12px;
              line-height: 1.4;
              margin: 0;
            }

            &:after {
              position: absolute;
              right: 0;
              top: calc(50% - 3px);
              width: 10px;
              height: 10px;
              font-weight: 400;
              content: '';
              opacity: 0;
              transition: all 0.25s ease-in-out;
              background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M4.62156 2.49956H0.378924' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
              background-repeat: no-repeat;
            }

            &:hover {
              color: #e0464d;

              &:after {
                right: -15px;
                opacity: 1;
              }
            }
          }

          .userProfileTime {
            @media (max-width: 767px) {
              font-size: 10px;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }

  .followersContainer {
    .main-img {
      .heartIcon {
        @media (max-width: 767px) {
          width: 32px;
          height: 32px;
          left: 10px;
          top: 10px;
        }

        svg {
          @media (max-width: 767px) {
            width: 18px;
            height: 18px;
          }
        }
      }

      .tagsIcon {
        @media (max-width: 767px) {
          margin: 0;
          top: 10px;
          right: 10px;
          font-size: 9px;
          line-height: 1.23;
          height: 22px;
        }

        span {
          svg {
            @media (max-width: 767px) {
              width: 8px;
              height: 8px;
            }
          }
        }
      }
    }

    .scrollslides {
      @media (max-width: 767px) {
        display: none;
      }

      .images-area {
        .image-counter {
          text-align: center;
          padding: 0 5px;
        }
      }
    }

    .right-Details {
      min-width: 230px;
      max-width: 230px;
      margin-left: 75px;
      display: flex;
      align-items: center;
      flex-flow: row wrap;

      @media (max-width: 1199px) {
        margin-left: 45px;
      }

      @media (max-width: 1023px) {
        min-width: 160px;
        max-width: 160px;
        margin-left: 20px;
      }

      @media (max-width: 767px) {
        min-width: 100%;
        max-width: 100%;
        margin-left: 0;
      }

      .right-holder {
        width: 100%;

        @media (max-width: 767px) {
          display: flex;
          flex-flow: row wrap;
        }
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 23px 0;
        width: 100%;

        @media (max-width: 767px) {
          width: 33.333%;
          justify-content: center;
          padding: 20px 0 0;
        }

        &:last-child {
          @media (max-width: 767px) {
            display: none;
          }
        }

        &:nth-child(3) {
          @media (max-width: 767px) {
            display: none;
          }
        }

        .title {
          display: flex;
          align-items: center;
          font-size: 15px;
          line-height: 1.4;
          color: #7B7B82;

          @media (max-width: 1023px) {
            font-size: 12px;
          }

          img {
            width: 24px;
            margin: 0 12px 0 0;

            @media (max-width: 1023px) {
              width: 18px;
              margin: 0 10px 0 0;
            }

            @media (max-width: 767px) {
              width: 24px;
            }
          }

          .text {
            @media (max-width: 767px) {
              display: none;
            }
          }
        }

        .subtitle {
          display: block;
          font-size: 16px;
          line-height: 1.4;
          color: #1E1E2D;
          position: relative;
          cursor: pointer;
          transition: all 0.25s ease-in-out;

          @media (max-width: 1023px) {
            font-size: 12px;
          }

          &:after {
            position: absolute;
            right: 0;
            top: calc(50% - 4px);
            width: 10px;
            height: 10px;
            font-weight: 400;
            content: '';
            opacity: 0;
            transition: all 0.25s ease-in-out;
            background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M4.62156 2.49956H0.378924' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;

            @media (max-width: 1023px) {
              top: calc(50% - 3px);
              width: 8px;
              height: 8px;
              background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M4.62156 2.49956H0.378924' stroke='%23e0464d' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
              background-repeat: no-repeat;
            }
          }

          &:hover {
            color: #e0464d;

            &:after {
              right: -15px;
              opacity: 1;

              @media (max-width: 1023px) {
                right: -12px;
              }
            }
          }
        }
      }
    }

    .card-Footer {
      font-size: 14px;
      line-height: 2;
      color: #7B7B82;

      @media (max-width: 767px) {
        font-size: 10px;
        line-height: 18px;
      }
      
      > div {
        padding: 30px 0 50px !important;

        @media (max-width: 767px) {
          padding: 20px 0 30px !important;
        }
      }
    }
  }
`
