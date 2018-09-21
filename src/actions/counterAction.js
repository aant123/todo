const increment = number => ({
  type: 'INCREMENT',
  state: number
})

const decrement = number => ({
  type: 'DECREMENT',
  state: number
})

export {
  increment,
  decrement
}
