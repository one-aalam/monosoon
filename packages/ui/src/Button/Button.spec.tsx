import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    const { queryAllByText } = render(<Button>Boop</Button>);
    expect(queryAllByText("Boop")).toHaveLength(1);
  });
});
