import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
//animation
import { animateBg, animate } from '../animation'

function Loading(props) {
    //create size of circle
    const size = [];
    for (let i = 1; i < 21; i++) {
        size.push(i);
    }
    const isloading = useSelector((state) => state.games.isloading);

    return (
        <div>
            {isloading && <StyledSection>
                <StyledLoader className="loader">
                    {
                        size.map((item) => {
                            return <StyledSpan key={item} item={item} style={{ index: item }}></StyledSpan>
                        })
                    }
                </StyledLoader>
            </StyledSection>}
        </div>
    );

}

const StyledLoader = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    z-index:101;
`;

const StyledSpan = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: ${(props) => `rotate(calc(18deg * ${props.item}))`};

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #00ff0a;
        box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
            0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
        animation: ${animate} 2s linear infinite;
        animation-delay:${(props) => `calc(0.1s * ${props.item})`} ;
    }
`;

const StyledSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #041204;
    animation: ${animateBg} 10s linear infinite;

`;

export default Loading;