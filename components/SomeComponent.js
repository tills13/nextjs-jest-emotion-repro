import styled from "@emotion/styled";

import { Wrapper } from "./WrapperComponent";

function SomeComponent({ className }) {
  return <div className={className}>Some Component</div>;
}

export default styled(SomeComponent)`
  ${Wrapper} & {
    margin-bottom: 10px;
  }
`;
