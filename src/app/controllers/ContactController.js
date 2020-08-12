class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from contact controller');
  }

  show() {
    // Obter um usuário
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
