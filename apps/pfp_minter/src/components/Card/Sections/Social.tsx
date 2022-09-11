import styled from "styled-components";

export const Area = styled.div`
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr 3px;
  align-items: center;
`;

export const Menu = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 0.08rem solid;
  background-color: #e5e5e5;
  justify-self: end;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 0.08rem solid;
  background-color: #e5e5e5;
  justify-self: center;
`;

export const Social = () => {
  return (
    <Area>
      <Circle />
      <Circle />
      <Circle />
      <Menu></Menu>
    </Area>
  );
};
