import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { Icon } from "@components"
import { LeftSliderArrow, RightSliderArrow, Tag, TimeDuraion } from "@icons"
import { FavData } from "data"
import React, { useRef } from 'react'
import Slider from "react-slick"
import styled from "styled-components"


type Props = {
    className?: string
}


const LatestRecipesSlider = ({ className }: Props) => {
    const sliderRef = useRef(null)

    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <RightSliderArrow />,
        prevArrow: <LeftSliderArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                },
            },
        ],
    };
    const LatestRecipes = () => {



        return FavData.map((e, index) => {
            return (
                <div className={`item-${index}`} key={e.id}>
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
        })



    }
    return (
        <div className={className}>

            <Slider
                draggable={false}
                ref={sliderRef}
                {...settings}
            >
                {LatestRecipes()}
            </Slider>
        </div>

    )
}
export default styled(LatestRecipesSlider)`
width :1000px;
`