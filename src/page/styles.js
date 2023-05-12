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

`;

export const Table = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: column;
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 80%;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 15px 0;
  color: ${primary};
}

p {
  margin-bottom: 25px;
  color: black;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 80%;
  background-color: white;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 5px;

  button {
    display: flex;
    width: 30%;
    height: 45px;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    background-color: ${primary};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

  .container {
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: flex-start;

    label{
      font-size: 10px;
      margin-bottom: 5px;
      color: black;
      font-weight: bold;
    }
    input {
      padding: 10px;
      border: none;
      height: 20px;
      border-radius: 5px;
      font-size: 16px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      width: 100%;

    }
    input:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
    input:hover {
    }
    input::placeholder {
      color: #999;
    }
  }
`

export const Scroll = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 240px;
  margin: 5px 0 ;
  overflow: hidden;
  overflow-y: auto;

  thead{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    td{
        display: flex;
        width: 30%;
        color: black;
        align-items: center;
        justify-content: center;
        margin: 5px 0;

        button{
          display: flex;
          width: 40%;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          border: none;
          font-weight: bold;
          color: white;
          font-size: 11px;
          padding: 2.5px;
          cursor: pointer;
          height: 22px;
        }
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