import { render, screen } from "@testing-library/react";
import React from "react";
import { TodosList } from "./todos-list";
describe("todos-list tests:", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <TodosList
        filtersMap={{}}
        todos={[]}
        todoChange={() => {}}
        todoCreate={() => {}}
        todoDelete={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("should show todo from todos input", () => {
    const { asFragment } = render(
      <TodosList
        filtersMap={{}}
        todos={[
          { id: "1", done: false, description: "yo my dudes", color: "black" },
        ]}
        todoChange={() => {}}
        todoCreate={() => {}}
        todoDelete={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Black")).toBeInTheDocument();
    expect(screen.getByDisplayValue("yo my dudes")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("yo my dudes1")).not.toBeInTheDocument();
    screen
      .findByDisplayValue("yo my dudes")
      .then((res) => expect(res).toBeInTheDocument());
  });
});
