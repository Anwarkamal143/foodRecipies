import { ChevronRightIcon } from '@icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import BrowseRecipesByCategory from './BrowseRecipesByCategory';

type Props = {
    data?: any
    className?: string

}

const CategoryTypes = ({ className, data = [] }: Props) => {
    const [index, setIndex] = useState<any>(0)

    return (
        <div className={className}>
            <header className="recipesSectionHeader">
                <strong className="recipesSectionTitle">Browse Recipes By Category</strong>
                <div className="favorite-head">
                    <span className="recipesSectionText">A recipe is a set of instructions that describes how to prepare or make.</span>
                    <span className="feature-btn">View All Breakfast  <ChevronRightIcon /> </span>
                </div>
            </header>

            <div className="recipesCategories">
                {data?.map((e: any, ind) => {
                    return (
                        <div key={e?.category} className={`recipesCategoriesButton ${className} ${ind === index ? "active" : "in-active"}`}>
                            <span onClick={() => setIndex(ind)}>{e.category}</span>
                        </div>
                    )
                })}
            </div>
            <BrowseRecipesByCategory index={index} data={data} />
        </div>
    )
}

export default styled(CategoryTypes)`
`