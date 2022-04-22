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
            <div>

                <h3>{title}</h3>
                <CrossIcon />
            </div>
            <div className='search_input_wrapper'>
                <Input className='search_input' placeholder='Search recipes,cook,shop,and more...' onChange={(e) => {
                    handleSearch(e.target.value)
                }} materialDesign />
                {searchText && <CrossIcon className='clearsearchbtn' onClick={() => setSearchText('')} />}
                <span className={searchText ? 'active_search' : ''} >
                    <SearchIcon />
                </span>
            </div>



        </div>
    )
}
export const SearchHeader = styled(Header)`

.search_input_wrapper {
    display: flex;
}


`