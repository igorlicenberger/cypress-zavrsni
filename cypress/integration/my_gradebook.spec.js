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

    it("My Gradebook Page, add student without diary", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.AddStudent).should('be.visible').click()
    })

    it("My Gradebook Page, add comment without diary", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.AddComment).should('be.visible').type(userData.randomTitle)
        cy.get(Locators.MyGradebook.SubmitComment).should('be.visible').click()
    })

    it("My Gradebook Page, add comment with diary", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.AddComment).should('be.visible').type(userData.randomTitle)
        cy.get(Locators.MyGradebook.SubmitComment).should('be.visible').click()
    })

    it("My Gradebook Page, delete comment with diary", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.DeleteComment).should('be.visible').click()
    })

    it("My Gradebook Page, Edit Gradebook", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.EditGradebook).click()
        cy.get(Locators.MyGradebook.SubmitButton).should('be.visible').click()
    })

    it("My Gradebook Page, Add Student to diary", () => {
        cy.visit("/")
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type("postman@gmail.com")
        cy.get(Locators.Login.Password).type("12345678")
        cy.get(Locators.Login.Submit).click()

        cy.wait(2000);

        cy.get(Locators.Header.MyGradebook).click()
        cy.get(Locators.MyGradebook.AddStudent).click()

        cy.wait(2000);

        cy.get(Locators.CreateStudent.FirstName).type(userData.randomFirstName)
        cy.get(Locators.CreateStudent.LastName).type(userData.randomLastName)
        cy.get(Locators.CreateStudent.AddImageButton).click()
        cy.get(Locators.CreateStudent.ImageUrl).type("https://thumbs.dreamstime.com/z/cartoon-professor-vector-illustration-30463505.jpg")
        cy.get(Locators.CreateStudent.Submit).click().should('be.visible');
    })
})