import styled from 'styled-components'
import { CustomInput } from 'reactstrap';

export const StyledSwitch =  styled(CustomInput)`
    label::before {
        padding: 12px;
        width: 50px !important;
        background-color: #3F3D56;
        border-radius: 200px !important;
        border: 0;
    }

    input:checked~label::before {
        background-color: #00B049!important;
        
    }

    label::after {
        margin: 2px;
        padding: 7px !important;
        background-color: #fff !important;
        border: #fff solid 1px !important;

    }

    input:checked~label::after {
        transform: translateX(27px)!important;
    }
    
    label {
        display: flex;
        align-items: center;

        padding-left: 22px;
        padding-top: 7px;

        font-size: 13px;
    }
`