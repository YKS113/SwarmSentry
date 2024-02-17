import React from 'react'
import styled from "styled-components";

const FirstLoading = () => {
  return (
    <Wrapper>
    <div className="cont">
        <img src="/public/images/logo2.svg" alt="" />
    </div>
    </Wrapper>
  )
}

export default FirstLoading

const Wrapper=styled.section`
    .cont{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;