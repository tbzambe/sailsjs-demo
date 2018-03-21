/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: (req, res) => User.find()
    .then(users => res.view('list', { users: users }))
    .catch(error => res.send(500, { error: `Erro em banco de dados: ${error}` })),
	
  add: (req, res) => res.view('add'),
};

