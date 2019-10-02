import * as bodyParser from 'body-parser'

import express from 'express'
import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport'
import jwtVerify from './jwtVerify'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

const app = express()

passport.use('jwt-api', new JwtStrategy({
	jsonWebTokenOptions: {
		audience: 'jwt-api',
	},
	secretOrKey: '123123132',
	jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(), ExtractJwt.fromUrlQueryParameter('t')])
	
}, jwtVerify))
app.use(passport.initialize())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = Router()

const workflow = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		return res.json({ foo: 'test' })
	} catch (error) {
		return next(error)
	}
}

router.get('/examinations',
		passport.authenticate('jwt-api'),
		workflow)


export default app