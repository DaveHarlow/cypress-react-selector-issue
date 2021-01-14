 import { mount, unmount } from '@cypress/react'
 import ClassCounter from '../../src/components/Counter'
 import React from "react"

 describe('HelloWorld component', () => {

  beforeEach(() => {
    mount(<ClassCounter />)
    cy.waitForReact();
  })
  
   it('works', () => {
     cy.react("ClassCounter").should('exist');
   })

   it('works again', () => {
    cy.react("ClassCounter").should('exist');
  })

  it('works for a third time', () => {
    cy.react("ClassCounter").should('exist');
  })
 })


