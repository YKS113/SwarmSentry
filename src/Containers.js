import React  from 'react'
import styled from 'styled-components'
import HeaderContainers from './components/ContainersComponent/HeaderContainers'
import ContainersTable from './components/ContainersComponent/ContainersTable'

const Containers = () => {
  
  return (
    <Wrapper>
    <HeaderContainers/>
    <ContainersTable/>
    </Wrapper>
  )
}

export default Containers
const Wrapper=styled.section`
`;