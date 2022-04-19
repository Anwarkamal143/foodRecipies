import { ChevronRightIcon } from '@icons'
import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { SearchCooksMockData, SearchRecipesMockData } from './data'
import { SearchedCookRecipeItem } from './SearchedItem'

type Props = {
    className?: string
    onClickClear?: (...args: any) => void
    isSearchingEnable?: boolean
}

const SearchedRecipesAndCooks = (props: Props) => {
    const { className, onClickClear, isSearchingEnable = false } = props
    return (
        <div className={className}>
            <div className='data_section'>
                {isSearchingEnable ? <><p className='section_title'>Recipes</p> <span className='section_title' onClick={onClickClear}>Clear</span></> :
                    <><p className='section_title' >Popular Recipes</p> <span onClick={onClickClear}> <Button
                        shape="circle"

                        iconRight={<ChevronRightIcon />}
                        className="custom-button buttonViewAll"
                        size="small"
                    >
                        View All
                    </Button> </span> </>


                }
            </div>
            <hr />

            <div className='recipes'>
                {SearchRecipesMockData.map(recipe => {
                    return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
                })}
            </div>
            {isSearchingEnable ? <><p className='section_title'>Cooks</p> </> :
                <><p className='section_title' >Trending Cooks</p > <span onClick={onClickClear}> <Button
                    shape="circle"

                    iconRight={<ChevronRightIcon />}
                    className="custom-button buttonViewAll"
                    size="small"
                >
                    View All
                </Button> </span> </>


            }
            <hr />
            <div className='cooks'>
                {SearchCooksMockData.map(recipe => {
                    return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
                })}
            </div>


            {!isSearchingEnable ? <div>
                <p>What We’re Into Right Now</p>

                <hr />


            </div> : null}
        </div>
    )
}

export const SearchedSections = styled(SearchedRecipesAndCooks)`

img{
    width: 50px;
}
`