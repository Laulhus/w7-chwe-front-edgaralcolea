import styled from "styled-components";

const FormContainer = styled.form`
  background: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    color: black;
  }
  ul {
    padding: 0px;
    list-style: none;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 15px;
  }
  input {
    padding: 12px 20px;
    width: 80%;
    border: 1px solid #ccc;
  }
  button {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4e1afb;
    font-size: 18px;
    color: white;
    border-radius: 3px;
    padding: 20px;
    text-align: center;
    &:hover {
      background: #7a2edd;
    }
  }
`;

export default FormContainer;
