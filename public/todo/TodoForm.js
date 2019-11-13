import Component from '../Component.js';

class TodoForm extends Component {

    onRender(dom) {
        const onAdd = this.props.onAdd;
        const form = dom.querySelector('form');
        const input = dom.querySelector('input[name=todo]');

        form.addEventListener('submit', async event => {
            event.preventDefault();

            const todo = {
                task: input.value,
                complete: false
            };

            try {
                await onAdd(todo);
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // random comment
            }
        });
    }

    renderHTML() {
        return /*html*/`
            <section class="type-form-section">
                <form class="type-form">
                    <input name="type" required>
                    <button>Add</button>
                </form>
            </section>
        `;
    }
}

export default TodoForm;