import { SidebarAnimations } from '@animations'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchHeader } from './Header'
import { SearchedSections } from './SearchedSections'

type Props = {
    className?: string


}
const AppSearchC = ({ toggleSideBar }: { toggleSideBar?: any }) => {
    console.log({ toggleSideBar })
    const [searchText, setSearchText] = useState<any>('')
    return <div>
        <SearchHeader onClose={toggleSideBar} onSearch={(s?: string) => setSearchText(s)} />
        <SearchedSections isSearchingEnable={!!searchText} />
    </div>
}
const AppSearchSlider = (props: Props) => {
    const { className } = props
    return (
        <div className={className}>
            <SidebarAnimations >

                <AppSearchC />
            </SidebarAnimations>


        </div>
    )
}

export const AppSearch = styled(AppSearchSlider)`
    

    
`