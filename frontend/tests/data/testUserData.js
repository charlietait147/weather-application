export const user = {
    username: "testUser",
    password: "1998" // Wrap the password value in quotes to ensure it is treated as a string
};

export const incorrectUserPassword = {
    username: "testUser",
    password: "1999"
};

export const shortUserPassword = {
    username: "testUser",
    password: "1"
};

export const mockGetLocationResponse = 
    [{ _id: "1", location: "London" }, { _id: "2", location: "Paris" }];

export const mockAddedLocationResponse =  [{ _id: "1", location: "London" }, { _id: "2", location: "Paris" }, { _id: "3", location: "Berlin" }];

export const mockDeletedLocationResponse = [ { _id: "2", location: "Paris" }];
 
