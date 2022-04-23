import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { Tag, TimeDuraion } from "@icons"
import React from "react"
import styled from "styled-components"

type Props = {
    data?: any
    className?: string
    tag?: boolean
    heartIcon?: boolean
    discription?: boolean
    timeDuraion?: boolean
}

const RecipesCard = ({
    data = [],
    tag = true,
    heartIcon = true,
    discription = true,
    timeDuraion = true,
    className,
}: Props) => {
    return (data || []).map((e: any) => {
        return (
            <div className={`${className} recipeItem`} key={e.id}>
                <div className="recipeItemImage">
                    {tag && (
                        <Icon className="tagsIcon">
                            <span>
                                <Tag /> Vegan
                            </span>
                        </Icon>
                    )}
                    {heartIcon && (
                        <Icon className="heartIcon">
                            <HeartIconAnimtaed />
                        </Icon>
                    )}

                    <img src={e.image} alt="image" />
                </div>
                <div className="recipeItemTextbox">
                    <strong className="recipeTitle">{e.title}</strong>
                    {discription && <span className="recipeAuthor">{e.fvrtBy}</span>}

                    {timeDuraion && (
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
                    )}
                </div>
            </div>
        )
    })
}

export default styled(RecipesCard)``
