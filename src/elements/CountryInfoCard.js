import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CountryInfoCard = styled.div`
    border: 1px solid #bdc3c7;
    border-radius: 3px;
    overflow: hidden;
    width: 23%;
    margin-bottom: 2.8rem;
    & .imgContainer {
        height: 180px;
        border-bottom: 1px solid #ecf0f1;
    }
    & .imgContainer img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    & a {
        background-color: red !important;
        text-decoration: none;
        color: #000000;
    }
`

export default CountryInfoCard;