import styled from "styled-components"


import PropTypes from "prop-types"

const baseWidth = 8.3333333333;
//Row justify-counter="center"
export const Col = styled.div`
    -webkit-box-flex:0
    felx:0;
    ${(props)=> `ms-felx: 0 0 ${props.size*baseWidth}%`};
    ${(props)=> `felx: 0 0 ${props.size*baseWidth}%`};
    max-width:  ${(props) => props.size *baseWidth};


`

Col.defaultProps = {
    size:12
}

Col.propTypes= {
    size: PropTypes.number
}