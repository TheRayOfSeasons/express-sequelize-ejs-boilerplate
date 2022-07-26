import Todo from '../database/models/todo';

class TodoService {
  async fetchOne(id) {
    const data = await Todo.findByPk(id);
    return data;
  }

  async count() {
    const data = await Todo.count();
    return data;
  }

  async list(page, itemsPerPage) {
    const data = await Todo.findAll({
      order: [
        ['id', 'DESC'],
      ],
      limit: itemsPerPage,
      offset: (page - 1) * itemsPerPage,
    });
    return data;
  }

  async create(name, description) {
    const data = await Todo.create({ name, description });
    return data;
  }

  async update(id, name, description) {
    const todo = await this.fetchOne(id);
    todo.set({
      name,
      description,
    });
    const data = await todo.save();
    return data;
  }

  async delete(id) {
    const todo = await this.fetchOne(id);
    const result = await todo.destroy();
    return result;
  }
}

export default TodoService;
