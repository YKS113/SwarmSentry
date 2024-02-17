import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import RightDashboard from './RightDashboard'
import { useState} from 'react'
const Main = () => {

  const [active, setActive] = useState("Home");
  let Rightcomponent;
  
  switch(active) {
    case "Home":
      Rightcomponent=<></>
      break;
    case "Orders":
      Rightcomponent=<></>
      break;
      case "Products":
        Rightcomponent=<></>
      break;
      case "Delivery":
        Rightcomponent=<></>
      break;
      case "Marketing":
        Rightcomponent=<></>
      break;
      case "Analytics":
        Rightcomponent=<></>
      break;
      case "Payouts":
        Rightcomponent=<RightDashboard />
      break;
      case "Discounts":
        Rightcomponent=<></>
      break;
      case "Audience":
        Rightcomponent=<></>
      break;
      case "Appearance":
        Rightcomponent=<></>
      break;
      case "Plugins":
        Rightcomponent=<></>
      break;
  } 

  
  return (
    <Wrapper>
    {/* <Left active={active} setActive={setActive}/> */}
    {Rightcomponent}
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