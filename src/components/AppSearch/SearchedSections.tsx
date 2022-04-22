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
            <div className='searchHeaderSection'>
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

            <div className='searchRecipes'>
                {SearchRecipesMockData.map(recipe => {
                    return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
                })}
            </div>
            <div className="searchHeaderSection">
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
            </div>

            <div className='searchCooks'>
                {SearchCooksMockData.map(recipe => {
                    return <SearchedCookRecipeItem {...recipe} key={recipe.id} />
                })}
            </div>


            {!isSearchingEnable ? <div>
                <div className="searchHeaderSection">
                    <p className='section_title'>What We’re Into Right Now</p>
                </div>


            </div> : null}
        </div>
    )
}

export const SearchedSections = styled(SearchedRecipesAndCooks)`

.searchHeaderSection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px;
    border-bottom: 1px solid #E6E6E6;
    margin: 0 0 15px;

    .section_title {
        display: block;
        font-size: 12px;
        line-height: 18px;
        color: #8D8D96;
    }

    .buttonViewAll {
        font-size: 10px;
        line-height: 14px;
        min-width: 70px;
        color: #8D8D96;
        padding: 4px 10px;
        background: #fff;
        border: 1px solid #E5E8EF;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin: 0 -3px 0 3px;

            path {
                transition: all 0.4s ease;
            }
        }

        &:hover {
            color: #fff;
            background: #FF6067;
            border-color: #FF6067;

            path {
                fill: #fff;
            }
        }
    }
}

.searchRecipes,
.searchCooks {
    overflow: hidden;
    margin: 0 0 30px;
}

`