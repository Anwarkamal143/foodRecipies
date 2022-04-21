import { PageLayoutWrapper } from "@layouts";
import { categoryData, FavData } from "data";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipesCard from '../../components/RecipiesCard';
import CategoryTypes from "./categoryTypes";
import LatestRecipesSlider from "./latestRecipes";

type Props = {
    className?: string

}

const NewPage = ({ className }: Props) => {
    const [newPageData, setNewPageData] = useState<any>([])

    useEffect(() => {
        setNewPageData(categoryData)
    }, [categoryData])
    return (
        <div className={className}>
            <PageLayoutWrapper variant={'regular'}>
                <div className="favorite-ctn">
                    <span>Featured Recipes</span>
                    <div className="favorite-head">
                        <span>A recipe is a set of instructions that describes how to prepare or make.</span>
                        <span className="feature-btn">View All Featured > </span>
                    </div>
                    <RecipesCard data={FavData} />
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
