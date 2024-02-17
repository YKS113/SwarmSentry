import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import RightDashboard from './RightDashboard'
import { useState} from 'react'
const Main = () => {

  const [active, setActive] = useState("Home");
  
  return(
    <Wrapper>
      <RightDashboard/>
    </Wrapper>
  )
}

export default Main
const Wrapper=styled.section`
display: grid;
grid-template-columns: 1fr 6fr;
margin-top: 8rem;
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
}
`;