/// <reference types="Cypress" />
const { random } = require("faker")
const faker = require("faker")
const Locators = require('../fixtures/Locators.json')
    let userData = {
        randomFirstName : faker.name.firstName(),
        randomLastName : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        randomPassword : faker.internet.password(),
        randomTitle : faker.name.title(),
        randomDescription : faker.name.title(),
        randomAddComment : faker.seed()
    }
describe("Gradebook", () => {
    beforeEach("Visit gradebook-app", () => {
        cy.visit('/')
        cy.url().should("contains", "https://gradebook.vivifyideas.com")
    }), 

    it("Gradebooks", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("cypress@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).should('be.visible').click()

        cy.wait(2000);

        const searchTerm = faker.name.title();

        cy.get(Locators.Header.Gradebook).click()
        cy.get(Locators.Gradebook.GradebookFilter).type(searchTerm);

        cy.get(Locators.Gradebook.SearchButton).should('be.visible').click()

        // cy.get(Locators.Gradebook.NextButton).click()
        // cy.get(Locators.Gradebook.PreviusButton).click()

    })
})