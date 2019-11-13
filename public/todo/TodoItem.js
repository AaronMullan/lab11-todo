import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/`
            HI
            <li>${todo.task}greetings</li>
        `;
    }
}

export default TodoItem;