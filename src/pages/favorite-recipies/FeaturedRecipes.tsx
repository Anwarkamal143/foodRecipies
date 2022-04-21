import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { Tag, TimeDuraion } from "@icons"
import { FavData } from "data"
import React from 'react'

type Props = {}

const FeaturedRecipes = (props: Props) => {
    return (
        <div>
            {FavData.map(e => {
                return (
                    <div key={e.id}>
                        <div>
                            <Icon className="tagsIcon">
                                <span>
                                    <Tag /> Vegan
                                </span>
                            </Icon>
                            <Icon className="heartIcon">
                                <HeartIconAnimtaed />
                            </Icon>
                            <img src={e.image} alt="image" />
                            <span>{e.title}</span>
                            <span>{e.fvrtBy}</span>
                        </div>
                        <div>
                            <span>
                                <TimeDuraion />
                                {e.time}
                            </span>
                            <span>
                                <TimeDuraion />
                                {e.state}
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FeaturedRecipes