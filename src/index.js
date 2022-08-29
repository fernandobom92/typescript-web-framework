"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserList_1 = require("./views/UserList");
const Collection_1 = require("./models/Collection");
const User_1 = require("./models/User");
const users = new Collection_1.Collection('http://localhost:3000/users', (json) => {
    return User_1.User.buildUser(json);
});
users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList_1.UserList(root, users).render();
    }
});
users.fetch();
