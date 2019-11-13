import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import { getTodos, addTodo } from '../services/todo-api.js';
import TodoForm from './TodoForm.js';


class TodoApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'My Todos' });
        dom.prepend(header.renderDOM());
        
        const main = dom.querySelector('main');
        const error = dom.querySelector('.error');

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());
        
        const todoList = new TodoList({ todos: [] });
        console.log(todoList, 'new');
        main.appendChild(todoList.renderDOM());
        
        const todoForm = new TodoForm({
            onAdd: async todo => {
                loading.update({ loading: true });
                error.textContent = '';

                try {
                    const saved = await addTodo(todo);
                    console.log(saved);
                    const todos = this.state.todos;
                    console.log(todos, '36');
                    todos.push(saved);

                    todoList.update({ todos });
                }
                catch (err) {
                    error.textContent = err;
                    throw err;
                }
                finally {
                    loading.update ({ loading: false });
                }
            }
        
        });
        main.appendChild(todoForm.renderDOM());
        // initial todo load:
        try {
            const todos = await getTodos();
            todoList.update({ todos: todos });
        }
        catch (err) {
            // display error...
        }
        finally {
            loading.update({ loading: false });
        }
        
    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main>
                <div id="stuff">
                
                    <!-- add todo goes here -->
                    <!-- todo list goes here -->
                </main>
            </div>
            </div>
        `;
    }
}

export default TodoApp;