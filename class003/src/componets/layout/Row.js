import styled from "styled-components"

import PropTypes from "prop-types"


import { justifyValues,numberType,atomicPx } from "../../constantes/layout"

//Row justify-counter="center"
export const Row = styled.div`
    displey:flex
    flex-wrap: wrap
    ${(props) => props.justify && `justify-conten : ${props.justify}`};
    ${(props) => props.mt && `margin-top : ${props.mt*atomicPx}px`};
    ${(props) => props.mt && `margin-button : ${props.mt*atomicPx}px`};
    ${(props) => props.mt && `margin-items : ${props.mt*atomicPx}px`};

`
Row.PropTypes = {
    justify: PropTypes.oneOf(justifyValues),
    mt: numberType,
    mb: numberType
}