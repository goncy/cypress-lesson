describe("Humor", () => {
  // Este hack es necesario por que Cypress no se lleva muy bien con el fetch nativo del browser, con suerte no lo vamos a necesitar en un futuro, basicamente reemplaza el fetch nativo por null para poder reemplazarlo con el fetch de cypress, esto va a servir para poder decidir que van a devolver nuestros calls http
  before(function() {
    Cypress.on("window:before:load", win => {
      win.fetch = null;
    });
  });

  beforeEach(function() {
    // Esto se va a ejecutar antes de CADA TEST
    cy.server(); // Le decimos a Cypress que vamos a hacer uso de su server

    cy.route("GET", "/humor/lunes", "😰"); // Le decimos a Cypress que cada pedido http dentro de nuestra app a /humor/lunes, debe devolver 😰
    cy.route("GET", "/humor/miercoles", "😐"); // Le decimos a Cypress que cada pedido http dentro de nuestra app a /humor/lunes, debe devolver 😐"
    cy.route("GET", "/humor/viernes", "😃"); // Le decimos a Cypress que cada pedido http dentro de nuestra app a /humor/lunes, debe devolver 😃

    cy.visit("/"); // Le decimos a nuestra a Cypress que vaya al inicio de nuestra app
  });

  it("debería devolver una cara triste si es lunes", () => {
    cy.get("[name='dias']").select("lunes"); // Seleccionamos lunes de nuestro listado de dias

    cy.contains("Obtener mi humor").click(); // Clickeamos el boton de obtener humor

    cy.contains("😰"); // Esperamos que la app contenga 😰
  });

  it("debería devolver una cara neutral si es miercoles", () => {
    cy.get("[name='dias']").select("miercoles"); // Seleccionamos miercoles de nuestro listado de dias

    cy.contains("Obtener mi humor").click(); // Clickeamos el boton de obtener humor

    cy.contains("😐"); // Esperamos que la app contenga 😐
  });

  it("debería devolver una cara felíz si es viernes", () => {
    cy.get("[name='dias']").select("viernes"); // Seleccionamos viernes de nuestro listado de dias

    cy.contains("Obtener mi humor").click(); // Clickeamos el boton de obtener humor

    cy.contains("😃"); // Esperamos que la app contenga 😃
  });
});
