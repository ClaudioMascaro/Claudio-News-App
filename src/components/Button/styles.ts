import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #83a4d4;
  padding: 16px;
  width: 45%;
  border: 0;
  border: 0 solid #FFF;
  color: #1A1B25;
  font-weight: 500;
  transition: background-color 0.2s;
  
    &:hover {
      background: ${shade(0.2,'#83a4d4')}
    }

`