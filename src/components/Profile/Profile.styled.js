import { styled } from "styled-components";

export const ProfileStyle = styled.div`
  margin: 25px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-image: white;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  border: 3px solid black;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 600;
  padding: 25px;

  .avatar {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    background-color: #333333;
  }
  .name {
    font-size: 35px;
    font-weight: bold;
    margin: 12px 0;
    color: black;
  }
  .tag {
    margin: 12px 0;
    font-size: 30px;
    color: #808080;
  }
  .location {
    font-size: 30px;
    margin: 12px 0;
    color: #808080;
  }
  .stats {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 100%;
  }
  .stats-items {
    display: flex;
    flex-direction: column;
    min-width: 125px;
  }
  .label {
    font-size: 30px;
    color: black;
    margin: 10px 0;
  }
  .quantity {
    font-size: 30px;
    color: black;
  }
`;
