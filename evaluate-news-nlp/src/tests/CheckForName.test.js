import { checkForName } from "../client/js/nameChecker.js"


describe("Testing with a valid url", () => {
    test("Testing the checkForName() function", () => {
           expect(checkForName('https://www.nytimes.com/2020/08/03/world/coronavirus-covid-19.html')).toBe(true);
})});


describe("Testing with an invalid url", () => {
    test("Testing the checkForName() function", () => {
           expect(checkForName('hello')).toBe(false);
})});
