import { LinkArrowIcon } from '@icons'
import React from 'react'
import styled from 'styled-components'
import { Image } from '../Image'

type Props = {
    className?: string
    onArrowClick?: (...args: any) => void
    img: string,
    id: string | number,
    name: string,
    newrecipes?: number
}

const SearchedItem = (props: Props) => {
    const { className, onArrowClick, img,
        id,
        name,
        newrecipes
    } = props
    return (
        <div className={className}>


            <div className='items'>

                <div key={id} className='item'>
                    <Image src={img} alt={name} />
                    <div className="itemTextbox">
                        <p>{name}</p>
                        {newrecipes && <span>{newrecipes} new Recipes</span>}
                    </div>
                    <span className="itemArrow">
                        <LinkArrowIcon onClick={onArrowClick} />
                    </span>
                </div>

            </div>


        </div>
    )
}

export const SearchedCookRecipeItem = styled(SearchedItem)`
    .item {
        display: flex;
        align-items: center;
        margin: 0 0 15px;

        .userProfileImageWrap {
            width: 34px;
            height: 34px;
        }

        .itemTextbox {
            flex-grow: 1;
            flex-basis: 0;
            font-size: 11px;
            line-height: 18px;
            color: #1E1E2D;
            padding: 0 10px 0 15px;
        }
    }
`