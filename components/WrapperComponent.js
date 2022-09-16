import styled from "@emotion/styled";

export const Wrapper = styled.div``;

function WrapperComponent({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default styled(WrapperComponent)`
  display: block;
`;
