import supertest from 'supertest'
import app from '../../../src/app'

const endpoint = '/api/v1/applications'
const { env } = <any>process
const today = new Date()

describe(`[GET] ${endpoint})`, () => {

	it('Bad endpoint, response should return code 404', async () => {
		const request = supertest(app)
		const response = await request.get(endpoint)
			.set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const request = supertest(app)
		const response = await request.get(endpoint)
			.set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const request = supertest(app)
		const response = await request.get(endpoint)
			.set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const request = supertest(app)
		const response = await request.get(endpoint)
			.set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const request = supertest(app)
		const response = await request.get(endpoint)
			.set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})
})
