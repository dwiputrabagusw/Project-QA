export function confirmationButton() {
    cy.get(".swal2-confirm.fs-7.bg-master.border-master.swal2-styled")
      .contains("OK")
      .click();
    cy.get(".swal2-confirm.fs-7.bg-master.border-master.swal2-styled")
      .contains("OK")
      .click();
  }