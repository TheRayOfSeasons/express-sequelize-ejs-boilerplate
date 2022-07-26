import TodoService from '../services/TodoService';

const service = new TodoService();

class TodoController {
  static async showDetails(request, response) {
    const { id } = request.params;
    const data = await service.fetchOne(id);
    response.render('todo-detail', {
      todo: data,
    });
  }

  static async list(request, response) {
    const page = request.query.page || 1;
    const itemsPerPage = 10;
    const data = await service.list(Number(page), itemsPerPage);
    const total = await service.count();
    response.render('todo-list', {
      todos: data,
      count: Math.ceil(total / itemsPerPage),
      currentPage: page,
    });
  }

  static create(request, response) {
    response.render('todo-create');
  }

  static async submitCreate(request, response) {
    const { title, description } = request.body;
    if (!title || !description) {
      response.send(400);
    }
    const data = await service.create(title, description);
    response.redirect(`/todo/detail/${data.id}`);
  }

  static async update(request, response) {
    const { id } = request.params;
    const data = await service.fetchOne(id);
    response.render('todo-update', {
      todo: data,
    });
  }

  static async submitUpdate(request, response) {
    const { id } = request.params;
    const { title, description } = request.body;
    if (!title || !description) {
      response.send(400);
    }
    const data = await service.update(id, title, description);
    response.redirect(`/todo/detail/${data.id}`);
  }

  static async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);
    response.redirect('/todo');
  }
}

export default TodoController;
