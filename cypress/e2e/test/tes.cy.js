export function confirmationButton() {
  cy.get(".swal2-confirm.fs-7.bg-master.border-master.swal2-styled")
    .contains("OK")
    .click();
  cy.get(".swal2-confirm.fs-7.bg-master.border-master.swal2-styled")
    .contains("OK")
    .click();
}

describe("boss itbudgeting", () => {
  beforeEach(() => {
    cy.visit("http://172.16.1.187:5026/login/");
  });

  it("Login IT Budget", () => {
    cy.get("input[placeholder='Username']").type("itportobudgeting");
    cy.wait(2000);
    cy.get("input[placeholder='Password']").type("Bussan500");
    cy.wait(2000);
    cy.get(".mb-2.w-100.btn.btn-warning.btn-sm").contains("SUBMIT").click();
    cy.wait(2000);
    confirmationButton();
    cy.wait(2000);
    cy.get(
      'button[class="w-100 text-start mb-2 p-2 btn btn-master btn-sm btn btn-primary btn-sm"]'
    )
      .contains("IT Portofolio Budgeting")
      .contains("IT Portofolio")
      .click();
    cy.get(
      'button[class = "swal2-confirm fs-7 bg-master border-master swal2-styled"]'
    )
      .contains("OK")
      .click();
    cy.get(
      'button[class = "swal2-confirm fs-7 bg-master border-master swal2-styled"]'
    )
      .contains("OK")
      .click();
    cy.contains("Welcome Jennie IT Porto to Budgeting!");
  });
});
