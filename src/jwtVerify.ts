import { VerifiedCallback } from 'passport-jwt'

export default async (_payload: any, done: VerifiedCallback) => {
	try {
		return done(null, 'user')
	} catch (e) {
		return done(e)
	}
}
