Vue.createApp({
  data() {
    return {
      checkedTodo: [],
      todos: [
        {
          id: 1,
          description: "laufen mit Bonnie",
          done: false,
        },
        {
          id: 2,
          descripion: "Sportmarkt einkaufen",
          done: true,
        },
      ],
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: +new Date(),
        descripion: this.newTodo,
        done: false,
      });
    },
  },
});
