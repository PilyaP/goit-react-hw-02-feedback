import styled from '@emotion/styled';

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  /* Общий фон кнопки */
  background: linear-gradient(to right, blue, yellow);

  /* Цвет кнопки в неактивном состоянии */
  &:disabled {
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);
    color: #666;
    cursor: not-allowed;
  }

  /* Цвет кнопки в активном состоянии */
  &:not(:disabled) {
    &:hover {
      background: linear-gradient(to right, green, red);
    }
    &:active {
      transform: scale(0.9);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
  }

  /* Цвет текста на кнопке */
  color: #fff;

  /* Тень кнопки */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
