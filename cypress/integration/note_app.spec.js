describe("note app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.request("POST", "http://localhost:3001/api/testing/reset");

    const user = {
      username: "RdzCore",
      name: "Daniel",
      password: "LaSuperPassword",
    };

    cy.request("POST", "http://localhost:3001/api/users/", user);
  });
  it("front page can be open", () => {
    cy.contains("Notes");
  });

  it("User can login", () => {
    cy.contains("Show Login").click();
    cy.get('[placeholder="Username"]').type("RdzCore");
    cy.get('[placeholder="Password"]').type("LaSuperPassword");
    cy.get("#form-login-btn").click();
    cy.contains("Create Notes");
  });

  it("Login fail with wrong credentials", () => {
    cy.contains("Show Login").click();
    cy.get('[placeholder="Username"]').type("RdzCore");
    cy.get('[placeholder="Password"]').type("Wrong-Password");
    cy.get("#form-login-btn").click();

    cy.contains("Wrong credentials");
  });

  it("User can create a new note", () => {
    const noteConten = "Hello Madafaka";

    cy.login({ username: "RdzCore", password: "LaSuperPassword" });

    cy.contains("Create Notes").click();
    cy.get('[placeholder="Create a new note.."]').type(noteConten);
    cy.get("#form-create-note-btn").click();
    cy.contains(noteConten);
  });
});
