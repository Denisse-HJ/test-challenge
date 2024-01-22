// Imports small array of users LISTO
// Pretend it's an API request
const users = require('./data.js');

// Fetches all users
const getUsers = () => {
    return users;
}
// Filters users by specific ID
const getUser = id => {
    return users.find(user => user.id === id);
}
const getUsername = username => {
    return users.find (user => user.username === username);
}
const getEmail = email => {
    return users.find (user => user.email === email);
}
function validatePassword (userId, password){
    const user = getUser(userId);
    //si esto no se cumple regresa a password
    return user ? user.password === password: false;
}
// test
// console.log(getUser(3));

module.exports = {getUsers, getUser, getUsername, getEmail, validatePassword};