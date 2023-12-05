import model from "./models.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
    model.findOne({ username: username });

export const findUserByCredentials = (username, password) =>
    model.findOne({ username, password });

export const updateUser = (userId, user) =>
    model.updateOne({ _id: userId }, { $set: user });

export const updateUserByName = (username, user) =>
    model.updateOne({ username: username }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const deleteUserByUsername = (username) => model.deleteOne({ username: username });