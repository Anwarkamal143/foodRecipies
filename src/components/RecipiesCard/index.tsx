import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { Tag, TimeDuraion } from "@icons"
import React from 'react'
import styled from "styled-components"

type Props = {
    data?: any
    className?: string
}

const RecipesCard = ({ data = [], className }: Props) => {
    return data?.map((e: any) => {
        return (
            <div className="recipeItem" key={e.id}>
                <div className="recipeItemImage">
                    <Icon className="tagsIcon">
                        <span>
                            <Tag /> Vegan
                        </span>
                    </Icon>
                    <Icon className="heartIcon">
                        <HeartIconAnimtaed />
                    </Icon>
                    <img src={e.image} alt="image" />
                </div>
                <div className="recipeItemTextbox">
                    <strong className="recipeTitle">{e.title}</strong>
                    <span className="recipeAuthor">{e.fvrtBy}</span>
                    <div className="recipeMeta">
                        <span className="recipeMetaBox">
                            <TimeDuraion />
                            {e.time}
                        </span>
                        <span className="recipeMetaBox">
                            <TimeDuraion />
                            {e.state}
                        </span>
                    </div>
                </div>
            </div>
        )
    })


}

export default styled(RecipesCard)``