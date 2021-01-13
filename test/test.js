var expect    = require("chai").expect;
const db = require('../data/db');

describe('suite', async () => {
    it('test', async () => {
        const res = await db("todo");
        expect(res.length).to.equals(3)
    })
})
