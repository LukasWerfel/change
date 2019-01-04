describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/")
    cy.queryByText("Learn React").should("exist")
  })
})
