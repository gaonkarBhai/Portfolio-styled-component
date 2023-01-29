import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './components/styles/Button'

const Error = () => {
    return (
        <Wrapper className='flex f-col'>
            <img src="images/error404.jpg" alt="" />
            <NavLink to='/'>
                <Button>GO BACK</Button>
            </NavLink>
        </Wrapper>
    );
}
const Wrapper = styled.section`
align-items: center;

    img{
        width: 500px;
    }
`
export default Error
