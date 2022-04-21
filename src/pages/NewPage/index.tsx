import { PageLayoutWrapper } from "@layouts";
import { categoryData } from "data";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FeaturedRecipes from './../favorite-recipies/FeaturedRecipes';
import CategoryTypes from "./categoryTypes";


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
                    <FeaturedRecipes />
                </div>
                <div>
                    <CategoryTypes data={newPageData} />
                </div>
            </PageLayoutWrapper>
        </div>
    )
}

export default styled(NewPage)``
