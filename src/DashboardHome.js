import React  from 'react'
import styled from 'styled-components'
import HeaderDashboard from './components/DashboardComponents/HeaderDashboard'
import Main from './components/DashboardComponents/Main'

const DashboardHome = () => {
  
  return (
    <Wrapper>
    <HeaderDashboard/>
    <Main/>
    </Wrapper>
  )
}

export default DashboardHome
const Wrapper=styled.section`
`;