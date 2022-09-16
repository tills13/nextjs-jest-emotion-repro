import SomeComponent from "../SomeComponent";
import { shallow } from "enzyme";

describe("SomeComponent", () => {
  it("renders", () => {
    expect(shallow(<SomeComponent />)).toMatchSnapshot();
  });
});
