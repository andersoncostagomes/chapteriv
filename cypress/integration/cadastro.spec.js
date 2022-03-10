/// <reference types ="cypress" />

var Chance = require('chance')
var chance = new Chance() 

describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser finalizado', () => {
        cy.visit('https://form-agilizei.netlify.app')

        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        cy.get('input[value=n]').check()
        
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        cy.get('select#countries').select('Dinamarca', {force: true})
        cy.get('select#years').select('1991', {force: true})
        cy.get('select#months').select('Julho', {force: true})
        cy.get('select#days').select('10', {force: true})

        cy.get('input#firstpassword').type('Alunos@2022')
        cy.get('input#secondpassword').type('Alunos@2022')

        cy.get('#submitbtn').click()

        // espero que miha aplicação seja direcionada para a listagem
        //url
        // deve conter a palavra listagem
        cy.url().should('contain', 'listagem') 
        
    });
});