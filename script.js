// designed for IsraelCena
// https://github.com/israelcena/todo-materialize

const dateNow = Date.now()

const onAutocomplete = () => {
  console.log(instance)
}

const sortFunction = (a, b, inputString) => {
  return a.indexOf(inputString) - b.indexOf(inputString)
}

const options = {
  data: {
    "apple":'https://placehold.it/250x250',
  },
  limit: 5, 
  minLength: 2,
  onAutocomplete: afterAutocomplete,
  sortFunction
}

// search bar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});
