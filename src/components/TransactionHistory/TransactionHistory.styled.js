import { styled } from "styled-components";

export const TransactionHistoryStyle = styled.table`
  width: 100%;
  max-width: 800px;
  text-align: center;
  background-image: white;
  padding: 30px 20px;
  border-radius: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 40px;

  th {
    background-color: #333333;
    padding: 15px;
    font-size: 30px;
    color: white;
  }

  td {
    border: 2px solid #000;
    font-size: 25px;
    color: black;
    opacity: 0.7;
  }

  tr:nth-child(even) {
    background-color: #9c9c9c;
  }
`;
