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
                    <p>{name}</p>
                    {newrecipes && <span>{newrecipes} new Recipes</span>}
                    <LinkArrowIcon onClick={onArrowClick} />
                </div>

            </div>


        </div>
    )
}

export const SearchedCookRecipeItem = styled(SearchedItem)`

img{
    width: 50px;
}
`