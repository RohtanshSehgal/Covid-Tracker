import styled from "styled-components";

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 0.5em;
    grid-column-gap: 0.5em;
    justify-items: center;
  } ;
`;
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const GridDyn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-row-gap: 0.5em;
  grid-column-gap: 0.5em;
  justify-items: center;
  align-items: start;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
