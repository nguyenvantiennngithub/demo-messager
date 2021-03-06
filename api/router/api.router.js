const apiController = require('../controller/api.controller')
const middlewareController = require('../../middleware/index.middleware')
function api(app){
    app.get('/api/messages/:id', middlewareController.checkAuth, apiController.message)
    app.get('/api/user', middlewareController.checkAuth, apiController.user)
    app.get('/api/user-chat-list', middlewareController.checkAuth, apiController.userChatList)
    app.get('/api/users', apiController.users)
}

module.exports = api
