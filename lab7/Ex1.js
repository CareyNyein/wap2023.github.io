function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};

// Solution 1
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Solution 2
user = {
    name: 'John',
    loginOk: function () {
        alert(`${this.name} logged in`);
    },
    loginFail: function () {
        alert(`${this.name} failed to log in`);
    }
};

askPassword(user.loginOk, user.loginFail);