//Bibliotecas
import pet from '../fixtures/pet.json'
import petAlterado from '../fixtures/petAlterado.json'
import listaPets from '../fixtures/listaPets.json'

describe('CRUD da entidade Pet', () => {

  // Post Pet
  it('POST Pet', () => {
    cy.request({
      method: 'POST',
      url: '/pet', // endpoint
      body: pet
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(7773333301)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })

  }) //Termina POST

  // Get Pet
  it('GET Pet', () => {
    cy.request({
      url: `/pet/${pet.id}`,
      method: 'GET'
    }).then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.id).to.eq(7773333301)
      expect(body.name).to.eq(pet.name)
      expect(body.category.id).to.eq(pet.category.id)
      expect(body.category.name).to.eq(pet.category.name)
      expect(body.tags[0].id).to.eq(pet.tags[0].id)
      expect(body.tags[0].name).to.eq(pet.tags[0].name)
      expect(body.status).to.eq(pet.status)
    })
  })//Termina GET

  // Put Pet
  // it('PUT Pet', () => {
  //cy.request({
  //url: `/pet/`,
  //method: 'PUT'
  //body: petAlterado
  // }).then(({ status, body}) =>{
  //expect(status).to.eq(200)
  //expect(body.id).to.eq(petAlterado.id)
  //expect(body.name).to.eq(petAlterado.name)
  //expect(body.category.id).to.eq(petAlterado.category.id)
  //expect(body.category.name).to.eq(petAlterado.category.name)
  //expect(body.tags[0].id).to.eq(petAlterado.tags[0].id)
  //expect(body.tags[0].name).to.eq(petAlterado.tags[0].name)
  //expect(body.status).to.eq(petAlterado.status)
  //})
  //}) //Termina PUT

  // Delete Pet
  it('DELETE Pet', () => {
    cy.request({
      method: 'DELETE',
      url: `/pet/${pet.id}`
    }).then(({ status, body }) => {
      expect(status).to.eq(200) //status code --> comjunicação com a API
      expect(body.code).to.eq(200) // process code --> processamento na API
      expect(body.type).to.eq('unknown') // tipo desconhecido - padrão
      expect(body.message).to.eq(`${pet.id}`) // código do animal que foi excluído
      expect(body.message).to.eq((pet.id).toString())
    })
  }) //Termina DELETE

  listaPets.forEach((element) => {
    // Post Pet Data Driven
    it(`POST Pet Data Driven - ${element.name}`, () => {
      cy.request({
        method: 'POST',
        url: '/pet', // endpoint
        body: element
      }).then(({ status, body }) => {
        expect(status).to.eq(200)
        expect(body.id).to.eq(element.id)
        expect(body.name).to.eq(element.name)
        expect(body.category.id).to.eq(element.category.id)
        expect(body.category.name).to.eq(element.category.name)
        expect(body.tags[0].id).to.eq(element.tags[0].id)
        expect(body.tags[0].name).to.eq(element.tags[0].name)
        expect(body.status).to.eq(element.status)
      })
    }) //Termina POST Data Driven
  })//Termina o listaPets
}) // Termina a describe




