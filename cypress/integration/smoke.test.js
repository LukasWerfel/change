describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/")
    cy.queryByText("create oss pr").should("exist")
  })
})
