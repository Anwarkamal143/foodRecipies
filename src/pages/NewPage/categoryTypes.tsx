import React, { useState } from 'react';
import styled from 'styled-components';
import BrowseRecipesByCategory from './BrowseRecipesByCategory';

type Props = {
    data?: any
    className?: string

}

const CategoryTypes = ({ className,data = [] }: Props) => {
    const [index, setIndex] = useState<any>(0)

    return (
        <div className={className}>
            {data?.map((e: any, ind) => {
                return (
                    <div key={e?.category} className={`${className} ${ind === index ? "active" : "in-active"}`}>
                        <span onClick={() => setIndex(ind)}>{e.category}</span>
                    </div>
                )
            })}
            <BrowseRecipesByCategory index={index} data={data} />

        </div>
    )
}

export default styled(CategoryTypes)`
`