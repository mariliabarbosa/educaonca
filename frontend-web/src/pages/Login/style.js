import styled from 'styled-components';

export const Container = styled.div `
  background-color: #004358;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: calc(100vh - 48px);
  width: 100vw;
  vertical-align: middle;
  flex-wrap: wrap;

  h1 {
    font-weight: 300;
    min-width: fit-content;
    max-width: fit-content;
    display: flex;
    align-items: center;
    font-size: calc(10px + 20vmin);
    color: white;
}
`
export const AreaLogin = styled.form `
  border-radius: 50px;
  max-height: calc(100vh - 200px);
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  font-size: calc(12px + 2vmin);
  color: #004358;
  background-color: white;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;

  h2 {
    font-weight: 500;
  }

  label {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: calc(6px + 2vmin);
  }
  input {
    border-radius: 10px;
    border: 1px solid #BEDB39;
    line-height: calc(2px + 2vmin);
    font-size: calc(6px + 2vmin);
    padding: 8px;
    margin: 10px 0;
  }

  button {
    border-radius: 15px;
    background-color: #1F8A70;
    color: white;
    font-size: 20px;
    padding: 10px 30px;
    margin: 10px 0px;
    cursor: pointer;
    border: 0;
  }

`