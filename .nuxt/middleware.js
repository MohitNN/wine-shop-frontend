const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['custome'] = require('..\\middleware\\custome.js')
middleware['custome'] = middleware['custome'].default || middleware['custome']

middleware['login'] = require('..\\middleware\\login.js')
middleware['login'] = middleware['login'].default || middleware['login']

middleware['loginCheck'] = require('..\\middleware\\loginCheck.js')
middleware['loginCheck'] = middleware['loginCheck'].default || middleware['loginCheck']

export default middleware
