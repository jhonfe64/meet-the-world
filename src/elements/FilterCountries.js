import styled from 'styled-components';

const FilterCountries = styled.div`
    & select {
        padding: 5px 40px;
        border: 1px solid #ecf0f1;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 1px 1px 5px rgba(0,0,0,.1);
        padding: 10px;
        width: 20%;

         @media only screen and (max-width: 1414px){
          width: 100%;
          margin-bottom: 10px;
        }
    }
`

export default FilterCountries;