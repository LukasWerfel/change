describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/")
    cy.getByText("Add").click()
    cy.queryByText("Journal 0").should("exist")
  })
})
