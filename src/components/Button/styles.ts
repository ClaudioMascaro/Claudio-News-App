import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #907F9F;
  padding: 16px;
  width: 45%;
  border: 0;
  border-radius: 0 0 10px;
  border: 0 solid #FFF;
  color: #1A1B25;
  font-weight: 500;
  transition: background-color 0.2s;
  
    &:hover {
      background: ${shade(0.2,'#907F9F')}
    }

`