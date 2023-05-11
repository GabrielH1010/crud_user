import styled from "styled-components";
import { midleGray, primary, black } from "../styles/colorProvider";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${primary};
  
  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const Table = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  margin: 0;
  border-bottom: 1.5px solid ${primary};

  h3{
    margin: 3px 0;
    font-size: 14px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    width: 33%;
    color: black;
  }
`;

export const Scroll = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 120px;
  margin: 5px 0 ;
  overflow: hidden;
  overflow-y: auto;

  thead{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: red;

    td{
        display: flex;
        width: 30%;
        background-color: black;
        align-items: center;
        justify-content: center;
    }
  }

  ::-webkit-scrollbar {
  width: 8px;
}
  ::-webkit-scrollbar-track {
  background: ${midleGray};
}
::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background: ${black};
  border: 1px solid ${primary};
}

  @media (max-width: 1200px) {
    height: 110px;
  }
`;