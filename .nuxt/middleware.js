const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['loginCheck'] = require('..\\middleware\\loginCheck.js')
middleware['loginCheck'] = middleware['loginCheck'].default || middleware['loginCheck']

export default middleware
