import React from 'react'
import styled from '@emotion/styled'

const SampleLayout = styled.div`
    border:1px solid;
`;

const Sample = () => {
    return (
        <SampleLayout>
            <p>Hello World</p>
        </SampleLayout>
    )
}

export default Sample
