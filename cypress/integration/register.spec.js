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

    it("Register", () =>{
        cy.get(Locators.Header.Register).click()
    })

    //  let correctEmail = 'cypress@gmail.com'

    it("Register with Faker credentials", () => {
        cy.visit("/")
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Password).type(userData.randomPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomPassword)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Submit).should('be.visible').click()
    })

    it("Register with Faker credentials", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).should('be.visible').click()
    })


 })