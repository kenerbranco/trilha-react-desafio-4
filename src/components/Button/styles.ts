import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    border: 1px solid #81259D;
    background-color: #cccccc;
    color: #ffffff;

    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    :disabled {
      background-color: #81259D;
      border: 1px solid #81259D;
    }
`