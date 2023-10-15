// designed for IsraelCena
// https://github.com/israelcena/todo-materialize

const dateNow = Date.now()

const onAutocomplete = () => {
  console.log(instance)
}

const sortFunction = (a, b, inputString) => {
  return a.indexOf(inputString) - b.indexOf(inputString)
}

const autoCompleteOptions = {
  data: {
    'apple': 'https://placehold.it/250x250',
  },
  limit: 5,
  minLength: 2,
  onAutocomplete,
  sortFunction,
}

const modalOptions = {
  opacity: 0.75,
}

const datePickerOptions = {
  autoClose: true,
  showMonthAfterYear: true,
  showDaysInNextAndPreviousMonths: true,
  format: 'dddd, d !de mmmm !de yyyy',
  i18n: {
    cancel: 'Cancelar',
    clear: 'Limpar',
    done: 'Fechar',
    months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    monthsShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    weekdays: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
    weekdaysShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  }
}

// materialize events
document.addEventListener('DOMContentLoaded', function () {
  const inputAutoComplete = document.querySelectorAll('.autocomplete')
  const topAutoComplete = M.Autocomplete.init(inputAutoComplete, autoCompleteOptions)

  const modals = document.querySelectorAll('.modal')
  const footerModal = M.Modal.init(modals, modalOptions)

  const datePicker = document.querySelectorAll('.datepicker')
  const modalDatePicker = M.Datepicker.init(datePicker, datePickerOptions)
})
