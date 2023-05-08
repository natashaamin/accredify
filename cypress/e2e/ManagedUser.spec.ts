describe("template spec", () => {
  it("passes", () => {
    cy.visit("/#/home/managed");
    cy.get(".nav-bar").find("img").should("have.attr", "alt", "SPA logo");
    cy.get(".greeting--headline").contains("John Smith");
    cy.get(".greeting--sub-headline").contains(
      "Manage your documents issued by SMU Academy or track your career goal."
    );
  });
});

describe("api calls are executed", () => {
  it("fetches data from the user endpoint", () => {
    cy.request("/api/user").then((response) => {
      expect(response.status).to.eq(200);

      expect(response).to.have.property("body");
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });

  it("fetches data from the document endpoint", () => {
    cy.request("/api/document").then((response) => {
      expect(response.status).to.eq(200);

      expect(response).to.have.property("body");
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });

  it("fetches data from the career goals endpoint", () => {
    cy.request("/api/career").then((response) => {
      expect(response.status).to.eq(200);

      expect(response).to.have.property("body");
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });
});

describe("Career Goal", () => {
  it("displays the correct career goal", () => {
    cy.visit("/#/home/managed");
    cy.get(".career-goal--header").should("have.text", "Your Progress");
    cy.get(".progress-text").should("have.text", "35%");
    cy.get(".career-goal--title").should("have.text", "I want to become a");
    cy.get(".career-goal-details h4").should("have.text", "Account Manager");
  });

  it("has a clickable link to view insights", () => {
    cy.visit("/");
    cy.get(".career-goal--link").click();
    cy.url().should("include", "/#");
  });
});

describe('Recent Documents', () => {
  it('displays a list of documents', () => {
    cy.visit('/#/home/managed'); // replace with the URL of the page you want to test
    cy.contains('Recent Documents').should('be.visible');
    cy.get('.document-list--name').should('have.length.at.least', 1);
  });

  it('opens the view all documents page when the view all button is clicked', () => {
    cy.visit('/#/home/managed');
    cy.contains('Recent Documents').should('be.visible');
    cy.get('.document--view-all').click();
    cy.url().should('include', '/#');
  });

  it('displays the received date for each document', () => {
    cy.visit('/#/home/managed');
    cy.contains('Recent Documents').should('be.visible');
    cy.get('.document-list--date').should('have.length.at.least', 1);
  });
});
