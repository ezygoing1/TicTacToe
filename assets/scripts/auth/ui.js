'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed in successfully ' + response.user.email)
  $('form').trigger('reset')
  store.user = response.user
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
