import bcrypt from 'bcrypt';
const userData = {
    userDataToImport: [
        {
            _id: '5f5c4d9f8e3b8d0d9f6f4f4f',
            username: 'testUser',
            password: bcrypt.hashSync('12345', 10),
            favouriteLocations : []
        },
        {
            _id: '5f5c4d9f8e3b8d0d9f6f4f4e',
            username: 'testUser2',
            password: bcrypt.hashSync("12345", 10),
            favouriteLocations: [ {
                location: "Dublin",
                _id: '5f5c4d9f8e3b8d0d9f6f4f4e'
            }]
        }
    ],
    wellFormedUser: {
        username: 'testUser3',
        password: "12345",
    },
    userNoUsername: {
        password: "12345",
    },
    userShortPassword: {
        username: 'testUser',
        password: "1",
    },
    userWrongTypeUsername: {
        username: 1234,
        password: '12345',
    },
    wellFormedLocation: {
        location: 'Dublin'
    }


}

export default userData;