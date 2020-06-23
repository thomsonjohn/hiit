export const sort = (items) => {
  const group = items
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((result, e) => {
      const key = e.name[0]
      if (!result[key]) result[key] = []
      result[key].push(e)
      return result
    }, {})
  return group
}
