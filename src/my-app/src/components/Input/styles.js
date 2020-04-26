import styled from 'styled-components'
import { InputGroupAddon, Input } from 'reactstrap'

export const IconInputContainer = styled.div`
  width: 100%;
  margin: 5px 0;
`

export const GroupAddon = styled(InputGroupAddon)`
  span { background-color: #fff; border: 0; padding: 0; }
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  
  border: 1px solid #ced4da;
  padding: 0 10px;
  width: 50px;
  `

export const StyledInput = styled(Input)`
  border-left: 0;
`

export const StyledGroupAddon = styled(InputGroupAddon)`
  span { background-color: #fff; border: 0; padding: 0; }
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  
  border: 1px solid #ced4da;
  border-right: 0;
  width: 50px;
  `

export const ButtonInputContainer = styled.div`
width: 100%;
`