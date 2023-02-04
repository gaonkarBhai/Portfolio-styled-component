import React from 'react'
import styled from 'styled-components';

const GotoTop = () => {
    const gotobtn = () => {
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    return (
        <Wrapper>
                    <div className='top-btn' onClick={gotobtn}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
                
        </Wrapper>
    );
}
const Wrapper = styled.section`
.top-btn{
    transition: all .3s linear;
    display: inline-block;
    position: fixed;
    right: 40px;
    top: 518px;
    background-color: ${({ theme }) => theme.colors.helper};
    padding: 2rem;
    z-index: 99;
    border-radius: 50%;
    i{
        font-size: 2rem;
        color: white;
        animation: top .5s infinite alternate-reverse;
    }
}
@keyframes top {
    from{
        transform: translateY(-.5rem);
    }
    to{
        transform: translateY(.5rem);
    }
}
@media (max-width:1000px) {
    .top-btn{
    right: 40px;
    top: 598px;
    }
}

@media (max-width:500px) {
    .top-btn{
    right: 128px;
    top: 679px;
    }
}
`
export default GotoTop