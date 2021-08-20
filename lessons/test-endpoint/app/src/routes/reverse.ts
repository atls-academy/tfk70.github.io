const reverseRoute = async (req) =>
  req.query.value ? req.query.value.split('').reverse().join('') : 'No string provided'

export { reverseRoute }
