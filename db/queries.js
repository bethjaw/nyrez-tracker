const db = require('./connect')

// USERS

function createUser(user){
  return db('user').insert(user).returning('*')
}

function getUser(){
  return db('user').select('*')
}

function getUserById(id){
  return db('user').select('*').where('id', id)
}

function updateUser(info, id){
  return db('user').update(info).where('id', id).returning('*')
}

function deleteUser(id){
  return db('user').delete().where('id', id)
}

// RESOLUTIONS

function createRez(rez){
  return db('resolutions').insert(rez).returning('*')
}

function getRez(){
  return db('resolutions').select('*')
}

function getRezById(id){
  return db('resolutions').select('*').where('user_id', id).innerJoin('user', 'user_id', "user.id")
}

function updateRez(info, id){
  return db('resolutions').update(info).where('id', id).returning('*')
}

function deleteRez(id){
  return db('resolutions').delete().where('id', id)
}


module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  createRez,
  getRezById,
  getRez,
  updateRez,
  deleteRez,
}
