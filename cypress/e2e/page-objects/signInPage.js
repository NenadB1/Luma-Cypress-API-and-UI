
export class SignInPage {

    elements = {
        signInLink: () => cy.get('a').contains('Sign In'),
        emailField: () => cy.get('#email'),
        resetEmailField: () => cy.get('#email_address'),
        passwordField: () => cy.get('#pass'),
        signInBtn: () => cy.get('#send2'),
        forgotPasswordBtn: () => cy.get('span').contains('Forgot Your Password?'),
        resetPasswordBtn: () => cy.get('button').contains('Reset My Password'),
        userSignedIn: () => cy.get('span').contains('Welcome'),
        demoStoreBanner: () => cy.get('div[class="message global demo"]'),
        headerBanner: () => cy.get('#ui-id-2').find('span')
    }

    messages = {
        errorInvalidEmail: () => cy.get('#email-error'),
        errorInvalidPassword: () => cy.get('#pass-error'),
        successResetPassword: () => cy.get('div[data-ui-id="message-success"]')

    }

    clickSignLink() {
        this.elements.signInLink().click();
    }


    enterEmailAndPassword(email, password) {
        this.elements.emailField().clear();
        this.elements.emailField().type(email);
        this.elements.passwordField().clear();
        this.elements.passwordField().type(password);
    }

    clickSignInButton() {
        this.elements.signInBtn().click()
    }


    resetPassword(email) {
        this.elements.forgotPasswordBtn().click()
        this.elements.resetEmailField().type(email)
        this.elements.resetPasswordBtn().click()

    }
}

export const signIn = new SignInPage