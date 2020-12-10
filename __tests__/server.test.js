'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

    it('should respond with a 404 on an indvalid method', async () => {
        expect(response.status).toBe(404);
    });

    it('can add a record', async() => {

    });

    it('can get a list of records', async() => {

    });

    it('can get a record', async () => {

    });

    it('can update a record', async () => {

    });

    it('can delete a record', async () => {

    });

});