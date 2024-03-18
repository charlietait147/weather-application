import * as chai from "chai";
import { expect } from "chai";
import chaiHttp from 'chai-http';

import server from '../index.js';
import userData from './data/testUser.js';
import User from '../src/models/user.model.js';

const { request } = chai.use(chaiHttp);

const { userDataToImport, wellFormedUser, userNoUsername, userShortPassword, userWrongTypeUsername } = userData;

describe("Testing Requests on User Collection ", () => {

    const testServer = request(server).keepOpen();

    beforeEach(async () => {
        try {
            await User.deleteMany({});
            console.log('User collection cleared');
        } catch (error) {
            console.log("Error clearing User collection")
            throw new Error();
        };
        try {
            await User.insertMany(userDataToImport);
            console.log('User collection populated with users');
        } catch (error) {
            console.log(error.message);
            console.log("Error populating User collection")
            throw new Error();
        }

    });


    describe(`POST request to /user/register`, () => {
        it('should return 201 and the user when a well formed user is sent', async () => {
            // Act
            const res = await testServer
                .post(`/user/register`)
                .send(wellFormedUser);

            // Assert
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('username', wellFormedUser.username);
            expect(res.body).to.have.property('password');
            expect(res.body).to.have.property('_id')
        });

        it('should return 400 when a user with no username is sent', async () => {
            // Act
            const res = await testServer
                .post('/user/register')
                .send(userNoUsername);

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('["Invalid username"]');
        });

        it('should return 400 when a user with a short password is sent', async () => {
            // Act
            const res = await testServer
                .post('/user/register')
                .send(userShortPassword);

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('["Password must be between 4 and 10 digits"]');
        });

        it('should return 400 when a user with a wrong type username is sent', async () => {
            // Act
            const res = await testServer
                .post('/user/register')
                .send(userWrongTypeUsername);

            // Assert  
            expect(res).to.have.status(400);
            expect(res.text).to.equal('["Invalid username"]');
        });
    })

});