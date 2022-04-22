import { ChevronRightIcon } from '@icons';
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
        <div className={`recipesPage ${className}`}>
            <PageLayoutWrapper className='recipesPageWrapper' variant={'regular'}>
                <div className="recipesContainer">
                    <div className="recipesSection">
                        <header className="recipesSectionHeader">
                            <strong className="recipesSectionTitle">Featured Recipes</strong>
                            <div className="favorite-head">
                                <span className="recipesSectionText">A recipe is a set of instructions that describes how to prepare or make.</span>
                                <span className="feature-btn">View All Featured <ChevronRightIcon /> </span>
                            </div>
                        </header>
                        <div className="recipesSectionHolder">
                            <RecipesCard data={FavData} />
                        </div>
                    </div>
                    <div className='recipesSection'>
                        <CategoryTypes data={newPageData} />
                    </div>
                    <div className="recipesSection">
                        <header className="recipesSectionHeader">
                            <strong className='recipesSectionTitle'>Latest Recipes</strong>
                            <span className="feature-btn">View All <ChevronRightIcon /></span>
                            <div className="favorite-head">
                                <span className="recipesSectionText">A recipe is a set of instructions that describes how to prepare or make.</span>
                            </div>
                        </header>
                        <LatestRecipesSlider />
                    </div>
                </div>
            </PageLayoutWrapper>
        </div>
    )
}

export default styled(NewPage)`
    width: 100%;
`
