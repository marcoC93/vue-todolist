var app = new Vue({
  el: '#root',

  data: {
    message: 'Hello Vue!',
    toDoList : [
        'mandare mail cliente',
        'effettuare upgrade disco',
        'assemblare PC',
        'andare dal fornitore'
    ],
    toDoTask: '',

},
  methods: {
    addElement() {
        if (this.toDoTask.length > 0) {
            this.toDoList.push(this.toDoTask)
        }
        else {
            alert('scrivi qualcosa')
        }

    },

    deleteElement(index) {
        this.toDoList.splice(index,1)
    }
  }

})
