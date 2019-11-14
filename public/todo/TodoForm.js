import Component from '../Component.js';

class TodoForm extends Component {

    onRender(dom) {
        const onAdd = this.props.onAdd;
        const form = dom.querySelector('form');
     

        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const todo = {
                task: formData.get('addtodo'),
                complete: false
            };
            console.log(todo);
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
                    <input name="addtodo" type="text" required>
                    <button>Add</button>
                </form>
            </section>
        `;
    }
}

export default TodoForm;