describe("E2E Testing Personal Site", () => {
  it("Display index", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="name"]')
      .should("exist")
      .should("have.text", "Nathan!");
  });

  it("Display Projects", () => {
    cy.visit("http://localhost:3000/projects");

    cy.get('[data-testid="projects"]')
      .should("exist")
      .should("have.text", "Projects");
  });

  it("Display Shorts", () => {
    cy.visit("http://localhost:3000/shorts");

    cy.get('[data-testid="shorts"]')
      .should("exist")
      .should("have.text", "Shorts");
  });
});
