describe("Sandia Login", () => {
  beforeEach(() => {
    cy.visit("http://172.16.1.187:5000/");
  });

  it("Login Sandia", () => {
    cy.get("input[placeholder = 'Email']").type("ANNIS.SUSANTI@BAF.ID");
    cy.wait(2000);
    cy.get("input[placeholder = 'Password']").type("Bussan10");
    cy.wait(2000);
    cy.get("button[class='px-4 btn btn-secondary']").contains("Login").click();
    cy.wait(2000);
    cy.get('[value=10085]')
  .within(() => {
    cy.get("button[class='float-right btn btn-secondary']").contains("Go").click();});
    cy.wait(2000);
    cy.get("[class ='btn btn-primary']").contains('OK').click();
    cy.wait(2000);
    cy.get("a[class=nav-link']").contains('Claim Request').click();
  });

});
