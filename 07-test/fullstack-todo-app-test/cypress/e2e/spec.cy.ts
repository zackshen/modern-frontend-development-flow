import { nanoid } from "nanoid";

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    const task = `cypress testcase ${nanoid()}`;
    cy.get("[data-testid='todo-content-input']")
      .type(task)
      .trigger("keydown", { key: "Enter", code: "Enter" });

    cy.contains(task).should("exist");

    cy.get("[data-testid='todo-content-input']").should("have.value", "");

    cy.contains(task).siblings(".toggle").trigger("click");
    // TODO 确认这个todo项目已经完成
    // cy.contains(task).parentsUntil(".completed").should("have.length", 1);
  });
});
