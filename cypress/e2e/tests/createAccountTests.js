import { CreateAccountPage, createaccount } from "../page-objects/createAccountPage"
import { valuesOfPerson } from "./config"

describe('Create Account Tests', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })


    it.only('Verify user can create account using valid values', () => {

        createaccount.clickCreateAnAccountLink()
        createaccount.enterValuesInTheFields(valuesOfPerson.firstName, valuesOfPerson.lastName, valuesOfPerson.emailRandom,
            valuesOfPerson.password, valuesOfPerson.confirmPassword)
        createaccount.clickCreateAnAccountBtn()
        createaccount.elements.myAccountSpan().should('contain', 'My Account')

    })

    it('Verify user can not create account using invalid email', () => {

        createaccount.clickCreateAnAccountLink()
        createaccount.enterValuesInTheFields(valuesOfPerson.firstName, valuesOfPerson.lastName, 'test@test',
            valuesOfPerson.password, valuesOfPerson.confirmPassword)
        createaccount.clickCreateAnAccountBtn()
        createaccount.messages.invalidEmailMessage().should('exist')

    })
})