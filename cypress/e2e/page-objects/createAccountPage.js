
export class CreateAccountPage {

    elements = {
        createAccountHeader: () => cy.get('a').contains('Create an Account'),
        firstNameField: () => cy.get('#firstname'),
        lastNameField: () => cy.get('#lastname'),
        emailField: () => cy.get('#email_address'),
        passwordField: () => cy.get('#password'),
        confirmPasswordField: () => cy.get('#password-confirmation'),
        createAccountBtn: () => cy.get('button').contains('Create an Account'),
        myAccountSpan: () => cy.get('.page-title-wrapper')
    }

    messages = {
        errorRequiredField: () => cy.get('div').contains('This is a required field.'),
        errorInvalidEmail: () => cy.get('div').contains('Please enter a valid email address'),
        errorInvalidPassword: () => cy.get('div').contains('Minimum length of this field must be equal or greater than 8 symbols')
    }

    clickCreateAnAccountLink() {
        this.elements.createAccountHeader().click();
    }

    enterValuesInTheFields(firstName, lastName, email, password, confirmPassword) {
        this.elements.firstNameField().clear();
        this.elements.firstNameField().type(firstName);
        this.elements.lastNameField().clear();
        this.elements.lastNameField().type(lastName);
        this.elements.emailField().clear();
        this.elements.emailField().type(email);
        this.elements.passwordField().clear()
        this.elements.passwordField().type(password)
        this.elements.confirmPasswordField().clear()
        this.elements.confirmPasswordField().type(confirmPassword)
    }

    clickCreateAnAccountBtn() {
        this.elements.createAccountBtn().click()
    }

}

export const createaccount = new CreateAccountPage()