import axios from 'axios';

interface Todo {
    text: string;
}
const baseUrl = 'https://todotypes-backend.up.railway.app/api/todos';

const getAll = (): Promise<Todo[]> => {
  const request = axios.get<Todo[]>(baseUrl);
  return request.then(response => response.data);
};

const create = (newObject: Todo): Promise<Todo> => {
  const request = axios.post<Todo>(baseUrl, newObject);
  return request.then(response => response.data);
};

const update = (id: number, newObject: Todo): Promise<Todo> => {
  const request = axios.put<Todo>(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

const remove = (id: any): Promise<Todo> => {
    const request = axios.delete<Todo>(`${baseUrl}/${id}`);
    return request.then(response => response.data);
};

const todoService = {
    getAll,
    create,
    update,
    remove
};

export default todoService;