/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { TodoHeader } from "./TodoHeader";

describe("TodoHeader", () => {
  it("test", async () => {
    const onAddItemMock = jest.fn();
    const markAllCompletedMock = jest.fn();
    render(
      <TodoHeader
        onAddItem={onAddItemMock}
        markAllCompleted={markAllCompletedMock}
      />
    );

    const inputEl = await screen.findByTestId("todo-content-input");
    fireEvent.change(inputEl, { target: { value: "task 01" } });
    fireEvent.keyDown(inputEl, { key: "Enter", code: "Enter", charCode: 13 });

    expect(onAddItemMock).toHaveBeenCalledWith("task 01");

    const checkboxEl = await screen.findByTestId("markall-complete");
    fireEvent.click(checkboxEl);
    expect(markAllCompletedMock).toHaveBeenCalled();
  });
});
