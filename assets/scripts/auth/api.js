'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (formData) {
  console.log('formData is ', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    // data
    // data: data
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  })
}
const signOut = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-out'
  })
}
const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.passwords.old,
        new: formData.passwords.new
      }
    }
  })
}
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  changePassword
}
