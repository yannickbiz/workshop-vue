<script>
export default {
    model: {
        prop: 'todos',
        event: 'update',
    },
    props: ['todos'],
    data() {
        return {
            newTodo: '',
        };
    },
    methods: {
        addTodo() {
            var value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.$emit(
                'update',
                this.todos.push({
                    title: value,
                    completed: false,
                })
            );
            this.newTodo = '';
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
    },
    render() {
        return this.$scopedSlots.default({
            todos: this.todos,
            removeTodo: this.removeTodo,
            inputBindings: { value: this.newTodo },
            inputEventHandlers: {
                input: e => {
                    this.newTodo = e.target.value;
                },
                keydown: e => {
                    if (e.keyCode === 13) {
                        e.preventDefault();
                        this.addTodo();
                    }
                },
            },
        });
    },
};
</script>
