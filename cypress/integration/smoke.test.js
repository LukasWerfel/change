describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/")
    cy.queryByText("Create OSS PR").should("exist")
  })
})
