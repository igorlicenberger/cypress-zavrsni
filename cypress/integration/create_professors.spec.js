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
        randomAddComment : faker.seed(),
        randomImage : [`${faker.image.avatar()}`]
    }
describe("Gradebook", () => {
    beforeEach("Visit gradebook-app", () => {
        cy.visit('/')
        cy.url().should("contains", "https://gradebook.vivifyideas.com")
    }),

    it("Create Professor", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("cypress@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.Gradebook).click()
        cy.get(Locators.Header.Professors).click()
        cy.get(Locators.Header.CreateProfessor).click()
        cy.get(Locators.CreateProfessor.FirstName).type(userData.randomFirstName)
        cy.get(Locators.CreateProfessor.LastName).type(userData.randomLastName)
        cy.get(Locators.CreateProfessor.AddImageButton).click()
        cy.get(Locators.CreateProfessor.ImageUrl).type("https://thumbs.dreamstime.com/z/cartoon-professor-vector-illustration-30463505.jpg")
        cy.get(Locators.CreateProfessor.AddImageButton).should('be.visible').click()
        cy.get(Locators.CreateProfessor.RemoveImage).should('be.visible').click()
        cy.get(Locators.CreateProfessor.Submit).should('be.visible').click()
    })

    it("Create Professor", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("cypress@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click();

        cy.wait(2000);

        cy.get(Locators.Header.Gradebook).click()
        cy.get(Locators.Header.Professors).click()
        cy.get(Locators.Header.CreateProfessor).click()
        cy.get(Locators.CreateProfessor.FirstName).type(userData.randomFirstName)
        cy.get(Locators.CreateProfessor.LastName).type(userData.randomLastName)
        cy.get(Locators.CreateProfessor.AddImageButton).click()
        cy.get(Locators.CreateProfessor.ImageUrl).type("https://thumbs.dreamstime.com/z/cartoon-professor-vector-illustration-30463505.jpg")
        cy.get(Locators.CreateProfessor.AddImageButton).click()
        cy.get(Locators.CreateProfessor.MoveImageDown).should('be.visible').click()
        cy.get(Locators.CreateProfessor.MoveImageUp).should('be.visible').click()
        cy.get(Locators.CreateProfessor.Submit).should('be.visible').click()
    })
})