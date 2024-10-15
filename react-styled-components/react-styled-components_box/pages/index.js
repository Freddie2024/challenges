import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <div>
      <StyledWrapper>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
        <BoxWithStyledComponents />
        <BoxWithStyledComponents $isBlack />
      </StyledWrapper>
    </div>
  );
}




