import styled from "styled-components";

export const Button = styled.button`

    border:none;
    background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`