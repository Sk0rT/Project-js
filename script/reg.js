let name = document.querySelector('#name');
let login = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(name, email, password) {
    this.name = name;
    this.login = email;
    this.password = password
}

function createId(users) {
    return Object.keys(users).length;
}

addEventListener('click', () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordUser = password.value;

    const user = new User(nameUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);

    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, вы зарегистрированы!`)


})