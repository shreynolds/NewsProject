const requestPost = require('../server/index')
const validateRequest = requestPost.methodNameWhereCallsAreDefined;
const httpMocks = require('node-mocks-http');

describe('Test, the function "validateRequest()" throw error if incorrect user inputs' , () => {
    test('validateRequest should throw error if incorrect user inputs', () => {
    const next = jest.fn();
    const req = httpMocks.createRequest({ 
        body: { 
        url: "https://www.studentnewsdaily.com/daily-news-article/u-s-seizes-north-korean-cargo-ship/"
        }
    });
    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    // validate HTTP result
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    // validate message
    const json = JSON.parse(res._getData());
    expect(json.message).toBe('Invalid input');
});
})