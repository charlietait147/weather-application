import bcrypt from 'bcrypt';
const userData = {
    userDataToImport : [
        {
            // _id: '5f5c330f6d3f5f0017b3e3e3',
            username: 'testUser',
            password: bcrypt.hashSync('12345', 10),
            // password: "12345",
            // favouriteLocations: [],
        },
        {
            _id: '5f5c330f6d3f5f0017b3e3e4',
            username: 'testUser2',
            password: "12345",
            favouriteLocations: [],
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
    
    
}

export default userData;