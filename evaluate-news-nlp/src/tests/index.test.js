const requestPost = require('../server/index')
const validateRequest = requestPost.methodNameWhereCallsAreDefined;
const httpMocks = require('node-mocks-http');

describe("Testing the request post functionality", () => {
    test("Testing the getInfo() function", () => {
           expect(requestPost).toBeDefined();
})});

