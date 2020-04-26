import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = styled(RouterLink)`
    border-radius: 2px;
    color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' : '#00B049' : '#fff'};
    background: ${({ outlined }) => outlined ? '#fff' : '#00B049'};
    border: 3px solid ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' : '#00B049' : '#fff'};
    
    padding: 8px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' :'#00B049' : '#fff'};
        text-decoration: none;
    }
`
const StyledButton = styled.button`
    border-radius: 2px;
    color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' : '#00B049' : '#fff'};
    background: ${({ outlined }) => outlined ? '#fff' : '#00B049'};
    border: 3px solid ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' : '#00B049' : '#fff'};
    
    padding: 8px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${({ outlined, isDark }) => outlined ? isDark ? '#3F3D56;' :'#00B049' : '#fff'};
        text-decoration: none;
    }
`

export { Link, StyledButton }