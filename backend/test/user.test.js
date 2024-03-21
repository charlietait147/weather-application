import * as chai from "chai";
import { expect } from "chai";
import chaiHttp from 'chai-http';

import server from '../index.js';
import userData from './data/testUser.js';
import User from '../src/models/user.model.js';

const { request } = chai.use(chaiHttp);

const { userDataToImport, wellFormedUser, userNoUsername, userShortPassword, userWrongTypeUsername, wellFormedLocation } = userData;


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

    describe(`POST request to /user/login`, () => {
        it('should return 200 and a message when a well formed user is sent', async () => {
            // Arrange
            const { username, password } = userDataToImport[0];

            // Act
            const res = await testServer
                .post('/user/login')
                .send({ username, password: '12345' });

            // Assert
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
        });

        it('should return 400 when a user with no username is sent', async () => {
            // Arrange
            const { password } = wellFormedUser;
            // Act
            const res = await testServer
                .post('/user/login')
                .send({ password });

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('Login failed');
        });

        it('should return 400 when a user with a wrong password is sent', async () => {
            // Arrange
            const { username } = wellFormedUser;
            // Act
            const res = await testServer
                .post('/user/login')
                .send({ username, password: 'wrongPassword' });

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('Login failed');
        });
    })

    describe(`PUT request to /user/:id`, () => {
        it('should return 200 and the updated user when a well formed user is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[0];
            const updatedUser = { newPassword: '12345' };

            // Act
            const res = await testServer
                .put(`/user/${_id}/update-password`)
                .send(updatedUser);

            // Assert
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('username', userDataToImport[0].username);
            expect(res.body).to.have.property('password');

        });

        it('should return 400 when a user with a short password is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[0];
            const updatedUser = { newPassword: '123' };

            // Act
            const res = await testServer
                .put(`/user/${_id}/update-password`)
                .send(updatedUser);

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('["New password must be between 4 and 10 digits"]');
        });
    });

    describe(`GET request to /user/:userId/favourite-locations`, () => {
        it('should return 200 and the favourite locations when a user with favourite locations is sent', async () => {
            // Act

            const { _id } = userDataToImport[1];

            const res = await testServer
                .get(`/user/${_id}/favourite-locations`);

            // Assert
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body[0]).to.have.property('location', 'Dublin');
        });
    });



    describe(`POST request to /user/:userId/favourite-locations/add`, () => {
        it('should return 201 and the favourite location when a well formed favourite location is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[0];

            // Act
            const res = await testServer
                .post(`/user/${_id}/favourite-locations/add`)
                .send(wellFormedLocation);

            // Assert
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(1);
            expect(res.body[0]).to.have.property('location', wellFormedLocation.location);
        });

        it('should return 400 when a favourite location with no location is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[0];
            const newFavouriteLocation = {};

            // Act
            const res = await testServer
                .post(`/user/${_id}/favourite-locations/add`)
                .send(newFavouriteLocation);

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('Adding favourite location failed');
        });
    });

    describe(`DELETE request to /user/:userId/favourite-locations/:locationId`, () => {
        it('should return 200 and the favourite location when a well formed favourite location is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[1];
            const locationId = userDataToImport[1].favouriteLocations[0]._id;

            // Act
            const res = await testServer
                .delete(`/user/${_id}/favourite-locations/${locationId}`);

            // Assert
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(0);
        });

        it('should return 400 when a favourite location with no location is sent', async () => {
            // Arrange
            const { _id } = userDataToImport[0];
            const locationId = '5f5c4d9f8e3b8d0d9f6f4f4e';

            // Act
            const res = await testServer
                .delete(`/user/${_id}/favourite-locations/${locationId}`);

            // Assert
            expect(res).to.have.status(400);
            expect(res.text).to.equal('Failed to delete favourite location');
        });
    });





})


