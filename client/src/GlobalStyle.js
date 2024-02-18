import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;

}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: 1fr 0.8fr;

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
      }
#sticky + .section{
  padding-top: 8rem;
}





/*css for Profile Modal */

.profileModal{
  .title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;  
  gap: 2rem;
  padding: 4rem 2rem 3rem 2rem;
  .iconBox{
      border-radius: 5px;
      box-shadow: 0px 3px 8.3px 0.7px rgba(163, 93, 255, 0.35);
      background: linear-gradient(to right, #da8cff, #9a55ff) !important;
      font-size: 1.5rem;
      color: white;
      padding: 1rem;
  }
  h3{
      font-weight: 600;
      color: #343A40;
      font-size: 2rem;
  }
}
.myDetails{
  padding: 2rem 2rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.logout{
  margin: 2rem 0;
  background-color: red;
  color: white;
  scale: calc(0.8);
} 
}


//Payment Modal css
.paymentModal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  gap: 1rem;
  img{
    max-width: 20rem;
    height: auto;
  }
  p{
    color: #4d4d4db1;
    text-align: center;
  }
  h3{
    color: ${({ theme }) => theme.colors.btn};
    font-weight: 600;
    text-align: center;
  }
  h2{
    color: rgb(19, 160, 20);
    text-align: center;
    font-weight: 600;
    /* letter-spacing: 5px; */
    text-shadow: 2px 7px 5px rgba(0,0,0,0.1), 
    0px -4px 10px rgba(255,255,255,0.1);
    
  }
}

.closeIcon{
  /* width: 100%;
  text-align: end; */
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 50%;
  padding: 0.5rem;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:all 0.1s ease 0.1s;
  :hover{
    background-color: #d9d7d9;
    
  }
  }
`;
