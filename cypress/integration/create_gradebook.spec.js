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
 
    it("Create Gradebooks with faker credentials", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("cypress@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click();

        cy.wait(2000);

        cy.get(Locators.Header.CreateGradebook).click()
        cy.get(Locators.CreateGradebook.GradebookTitle).type(userData.randomTitle)
        cy.get(Locators.CreateGradebook.Professor).select("83")
        cy.get(Locators.CreateGradebook.Submit).should('be.visible').click()
    })
})