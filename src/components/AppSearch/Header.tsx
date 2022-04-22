import { CrossIcon, SearchIcon } from '@icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'

type Props = {
    className?: string,
    title?: string,
    onSearch?: (text?: string) => void
}

const Header = (props: Props) => {
    const { className, title = 'Smart Search', onSearch } = props
    const [searchText, setSearchText] = useState('');


    const handleSearch = (searchTextt: string) => {
        setSearchText(searchTextt);
        onSearch?.(searchTextt);

    }
    return (
        <div className={className}>
            <div className='searchHeaderHeading'>

                <h3>{title}</h3>
                <div className="searchHeaderClose">
                    <CrossIcon />
                </div>
            </div>
            <div className='searchHeaderForm'>
                <Input className='search_input' placeholder='Search recipes,cook,shop,and more...' onChange={(e) => {
                    handleSearch(e.target.value)
                }} materialDesign />
                {searchText && <CrossIcon className='clearsearchbtn' onClick={() => setSearchText('')} />}
                <span className={searchText ? 'active_search' : 'searchIcon'} >
                    <SearchIcon />
                </span>
            </div>



        </div>
    )
}
export const SearchHeader = styled(Header)`

.searchHeaderHeading {
    overflow: hidden;
    text-align: center;
    position: relative;
    margin: 0 0 25px;

    @media (max-width: 767px) {
        text-align: left;
    }

    h3 {
        font-size: 16px;
        line-height: 20px;
        color: #E0464D;
    }

    .searchHeaderClose {
        position: absolute;
        right: 25px;
        top: 5px;

        @media (max-width: 767px) {
            right: 0;
        }
    }
}

.searchHeaderForm {
    position: relative;

    label {
        display: none;
    }

    .form-control {
        width: 100%;
        height: 34px;
        font-size: 12px;
        line-height: 18px;
        padding: 7px 70px 7px 18px;
        color: #8D8D96;
        border: 1px solid #FF6067;
        border-radius: 20px;
    }

    .input-active {
        .form-control {
            border-color: #FF6067;
        }
    }

    .clearsearchbtn {
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        width: 9px;
        height: 9px;

        path {
            fill: #BDBDBD;
        }
    }

    .searchIcon,
    .active_search {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FF6067;
        border-radius: 0 20px 20px 0;

        svg {
            width: 14px;
            height: 14px;
            
            path {
                fill: #fff;
            }
        }
    }
}


`