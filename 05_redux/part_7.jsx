// Think Action
function makeASandwichWithSecretSauce(forPerson) {
  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// Dispatch return a Promise
store.dispatch(makeASandwichWithSecretSauce('My partner'))
  .then(() => {
    console.log('Done!')
  })