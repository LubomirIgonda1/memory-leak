module.exports = {
	transform: {
		'^.+\\.ts?$': 'ts-jest'
	},
	roots: [
		'<rootDir>/tests/'
	],
	moduleFileExtensions: [
		'ts',
		'js'
	],
	setupFilesAfterEnv: [
		'<rootDir>/tests/setup.ts'
	],
	testEnvironment: 'node'
}
