import { bodyPostAddPet } from "../../support/body-helper";
import { bodyPutUpdatePet } from "../../support/body-helper";

let baseUrl = Cypress.config('baseApiUrl');

describe('manage pet in pet store', () => {

    it('Add new pet', () => {
        const body = bodyPostAddPet();
        cy.request({
            method: "POST",
            url: baseUrl + '/pet',
            body: body,
        }).then((response) => {
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("tags")
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("category")
            expect(response.body).to.have.property("name")
            expect(response.body).to.have.property("photoUrls")
            expect(response.body).to.have.property("status")
        })
    })

    it('Update existing pet', () => {
        const body = bodyPutUpdatePet();
        cy.request({
            method: "PUT",
            url: baseUrl + '/pet',
            body: body,
        }).then((response) => {
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("tags")
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("category")
            expect(response.body).to.have.property("name")
            expect(response.body).to.have.property("photoUrls")
            expect(response.body).to.have.property("status")
        })
    })

    it('Get pet by ID', () => {
        cy.request({
            method: "GET",
            url: baseUrl + '/pet/5'
        }).then((response) => {
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("tags")
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("category")
            expect(response.body).to.have.property("name")
            expect(response.body).to.have.property("photoUrls")
            expect(response.body).to.have.property("status")
        })
    })
    it('Delete pet by ID', () => {
        cy.request({
            method: "DELETE",
            url: baseUrl + '/pet/5'
        }).then((response) => {
            expect(response).to.have.property("status", 200)
            expect(response.body).to.have.property("message")
            expect(response.body).to.have.property("code")
        })
    })
})