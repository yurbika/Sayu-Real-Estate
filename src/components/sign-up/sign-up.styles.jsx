import theme from "../../utils/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15px;
  margin-top: 20px;

  & > * {
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  position: relative;
  height: 100%;
  width: 100%;
  max-height: 435px;
  max-width: 435px;
  background-color: ${theme.colors.brown};
  box-shadow: 5px 5px 5px ${theme.colors.hslaBlack};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    position: absolute;
    top: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: inherit;
  max-width: 325px;
  justify-content: space-evenly;
  margin-top: 15px;
  button {
    width: 125px;
    max-width: unset;
    min-width: unset;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-self: center;
  height: 3rem;
  width: 100%;
  max-width: 300px;
  margin-top: 5px;

  label {
    position: absolute;
    pointer-events: none;
    text-align: left;
    border-bottom: 2px solid ${theme.colors.lightWhite};
    height: 100%;
    width: 100%;
    letter-spacing: 1.2px;

    span {
      position: absolute;
      bottom: 5px;
      left: 0;
      transition: all 0.3s ease;
    }
  }

  label::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid ${theme.colors.darkPurple};
    top: -1px;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  input:focus + label span,
  input:valid + label span {
    transform: translateY(-150%);
    font-size: 14px;
    color: ${theme.colors.darkPurple};
  }

  input:focus,
  input:valid {
    height: 2.5rem;
    padding-top: 20px;
  }

  input:focus + label::after,
  input:valid + label::after {
    transform: translateX(0%);
  }

  input[type="password"] {
    font-size: 1rem;
    padding-top: 20px;
  }
  input::placeholder {
    opacity: 0;
  }

  input[type="email"]:not(:placeholder-shown) + label span {
    transform: translateY(-150%);
    font-size: 14px;
    color: #681899;
  }

  input[type="email"]:focus,
  input[type="email"]:not(:placeholder-shown) {
    height: 3rem;
    padding-top: 20px;
  }

  input[type="email"]:not(:placeholder-shown) + label::after {
    transform: translateX(0%);
  }
`;
