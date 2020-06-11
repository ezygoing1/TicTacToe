'use strict'

const store = require('./../store')
$('#start-game').hide()
$('#change-password').hide()

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
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#start-game').show()
}
// New game and change password button. Hide the signup and signin form
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
