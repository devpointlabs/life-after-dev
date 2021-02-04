import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const UserSection = styled.div`
background-color: white;
width: 100%;
height: 100%;
border-radius: 5%;
position: -webkit-sticky;
position: sticky;
margin-top: 5%;
margin-right: 7%;
top: 0;
`

export const NamePlate = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center !important;
  `

export const UserPic = styled.img`
  border-radius: 25%;
  height: 130px !important;
  width: 130px !important;
  object-fit: cover;
  `

export const DynamicProjects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  height: 20%
  `

export const AboutLoggedOut = styled.div`
  padding-bottom: 10%; 
  padding-left: 5%;
  `

export const AboutLoggedIn = styled.div`
padding-bottom: 10%; 
padding-left: 5%; 
padding-top: 10%;
`

export const Aboutlist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #9497a5;
  `
export const ProjectsLoggedIn = styled.div`
  width: 800px;
  height: 600vh;
  padding-right: 115px;
`

export const RequestsBox = styled.div`
  border-style: solid;
  border-radius: 5px; 
  border-width: 2px; 
  border-color: #9497a5; 
  background-color: white; 
`

export const RequestList = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between; 
  padding: 10px; 
  background-color: white;
`

export const UserSectionLogged = styled.div`
  background: #1e2021;
  width: 425px;
  height: 600vh;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 30px 0px 0px 0px;
  color: #fff;
  margin-right: -50px;
`

export const EditButton = styled.div`
  background-color: #6fd76a;
  height: 50px;
  width: 200px; 
  border-radius: 9px;
  text-align: center;
`