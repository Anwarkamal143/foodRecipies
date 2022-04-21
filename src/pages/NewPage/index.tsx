import { LeftSliderArrow, RightSliderArrow } from "@icons";
import { PageLayoutWrapper } from "@layouts";
import { categoryData } from "data";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FeaturedRecipes from './../favorite-recipies/FeaturedRecipes';
import CategoryTypes from "./categoryTypes";
import LatestRecipesSlider from "./latestRecipes";


type Props = {
    className?: string

}

const NewPage = ({ className }: Props) => {
    const [newPageData, setNewPageData] = useState<any>([])
    const sliderRef = useRef(null)

    useEffect(() => {
        setNewPageData(categoryData)
    }, [categoryData])
    const settings = {
        className: "center",
        slidesToShow: 5,

        slidesToScroll: 1,
        speed: 1200,
        nextArrow: <RightSliderArrow />,
        prevArrow: <LeftSliderArrow />,
    };
    return (
        <div className={className}>
            <PageLayoutWrapper variant={'regular'}>
                <div className="favorite-ctn">
                    <span>Featured Recipes</span>
                    <div className="favorite-head">
                        <span>A recipe is a set of instructions that describes how to prepare or make.</span>
                        <span className="feature-btn">View All Featured > </span>
                    </div>
                    <FeaturedRecipes />
                </div>
                <div>
                    <CategoryTypes data={newPageData} />
                </div>
                <div className="latest-Recipes">
                    <div>
                        <span>Latest Recipes</span>
                        <span>View All </span>
                    </div>
                    <div className="latest-Recipes-head">
                        <span>A recipe is a set of instructions that describes how to prepare or make.</span>
                        <span className="feature-btn">View All Featured > </span>
                    </div>
                    <LatestRecipesSlider />
                </div>
            </PageLayoutWrapper>
        </div>
    )
}

export default styled(NewPage)``
