

describe('POST /users', () => {


  it('register a new user', () => {

    const user = {
      name: 'Fernando Papito',
      email: 'papito@yahoo.com',
      password: 'pwd123'
    }

    cy.task('deleteUser', user.email)

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })

  })


})