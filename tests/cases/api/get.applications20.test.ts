import supertest from 'supertest'
import app from '../../../src/app'
const request = supertest(app)

describe(`[GET] /`, () => {
	it('Bad endpoint, response should return code 404', async () => {
		const response = await request.get('').set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const response = await request.get('').set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const response = await request.get('').set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const response = await request.get('').set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})

	it('Bad endpoint, response should return code 404', async () => {
		const response = await request.get('').set('Content-Type', 'application/json')

		expect(response.status).toBe(404)
	})
})
