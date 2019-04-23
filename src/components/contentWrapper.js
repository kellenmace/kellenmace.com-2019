import styled from "styled-components"

const ContentWrapper = styled.div`
    width: ${props => props.theme.contentWidth};
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.contentMargin};
    padding: ${props => props.theme.contentPadding};
`

export default ContentWrapper
