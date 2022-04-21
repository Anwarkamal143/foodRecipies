import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { Tag, TimeDuraion } from "@icons"
import React from 'react'
import styled from "styled-components"

type Props = {
    index?: any
    data?: any
    className?: string
}

const BrowseRecipesByCategory = ({ index, data = [], className }: Props) => {
    return (
        <div className={className}>
            {data[index || 0]?.data?.map((e: any) => {
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

export default styled(BrowseRecipesByCategory)``