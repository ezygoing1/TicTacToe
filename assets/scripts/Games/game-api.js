'use strict'

const config = require('./../config')
const store = require('./../store')

const gamestart = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: {}
  })
}
const gameOver = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/:over?'
  })
}
const gameId = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/:id'
  })
}
const gamePatch = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + store.game._ID
  })
}

module.exports = {
  gamestart,
  gameOver,
  gameId,
  gamePatch
}
