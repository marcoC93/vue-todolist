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
        this.toDoList.push(this.toDoTask)
    }

    deleteElement() {
    alert('cliccato')
    }
  }

})



// prova(){
//     alert('Il click funziona')
// }
