describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/")
    cy.queryByText("Journals").should("exist")
    cy.queryByText("Footer").should("exist")
  })
})
