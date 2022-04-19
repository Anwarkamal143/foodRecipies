import { SidebarAnimations } from '@animations'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchHeader } from './Header'
import { SearchedSections } from './SearchedSections'

type Props = {
    className?: string

}

const AppSearchSlider = (props: Props) => {
    const { className } = props
    const [searchText, setSearchText] = useState('')
    return (
        <div className={className}>
            <SidebarAnimations >

                <div>
                    <SearchHeader onSearch={(s?: string) => setSearchText(s || '')} />
                    <SearchedSections isSearchingEnable={!!searchText} />
                </div>
            </SidebarAnimations>


        </div>
    )
}

export const AppSearch = styled(AppSearchSlider)`
    

    
`