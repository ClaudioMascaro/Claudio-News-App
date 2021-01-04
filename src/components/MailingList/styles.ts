import styled from 'styled-components'

export const List = styled.ul`

height: auto;
  border-top: 30px;
  place-content: center;
  padding: 16px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  align-items: stretch;

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    border-top: 1px solid #757780;

  input {
    width: 22px;
    height: 22px;
    flex: 1;
    border: 10px;
    margin-right: 20px;
    color: #3a3a3a;
    border: 1px solid #FFF;
  }


  label {
    font-size: 22px;
    flex: 2;
    color: #3a3a3a;
  }
}
`
