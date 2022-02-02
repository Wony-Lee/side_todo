import React, { useState } from 'react'
import styled from '@emotion/styled'

const SampleLayout = styled.div`
    border:1px solid red;
`;

const Sample = () => {
    return (
        <SampleLayout>
            <p>Hello World</p>
        </SampleLayout>
    )
}

export default Sample
