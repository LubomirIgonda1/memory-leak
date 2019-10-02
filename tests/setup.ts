
afterAll( () => {
	jest.clearAllMocks()
	jest.resetModules()

	if (!global.gc) 
		console.log('Garbage collection is not exposed');
})

jest.setTimeout(10000)