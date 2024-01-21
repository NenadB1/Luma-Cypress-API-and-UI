
import { SignInPage, signIn } from "../page-objects/signInPage";
import { valuesOfPerson } from "./config";

describe('Sign In tests', () => {

    beforeEach('open application', () => {
        cy.visit('/')
        cy.get('a').contains('Sign In').click()
    })

    it('Verify user can sign in using valid credentials', () => {
        signIn.enterEmailAndPassword(valuesOfPerson.email, valuesOfPerson.password)
        signIn.clickSignInButton()
        signIn.elements.userSignedIn().should('exist')
    })

    it('Verify user can not sign in using invalid credentials', () => {
        signIn.enterEmailAndPassword('test@test', valuesOfPerson.password)
        signIn.clickSignInButton()
        signIn.messages.errorInvalidEmail().should('have.css', 'color', 'rgb(224, 43, 39)')

    })

    it('Verify banner in the header is colored in specific color', () => {
        signIn.elements.demoStoreBanner()
            .should('have.css', 'background-color', 'rgb(255, 1, 1)')
    })

    it('Verify user can reset password', () => {
        signIn.resetPassword(valuesOfPerson.email)
        signIn.messages.successResetPassword().should('be.visible')
    })

    it.only('Verify user can not sign in with all blank pages', () => {
        signIn.clickSignInButton()
        signIn.elements.emailField().should('have.css', 'border-color', 'rgb(237, 131, 128)')
        signIn.messages.errorInvalidPassword().should('exist')
    })
})