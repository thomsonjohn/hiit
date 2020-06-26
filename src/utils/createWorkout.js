import data from '../data/exercises'

const createWorkout = (muscleGroups, options, duration) => {
  const workout = {
    rounds: options.rounds,
    work: options.work,
    rest: options.rest,
    moves: [],
    duration,
  }
  const groups = muscleGroups.map((group) => {
    return group.group
  })
  const filteredMoves = data.filter((move) => {
    return groups.includes(move.group[0])
  })
  if (groups.length > 0) {
    const movesByGroups = Math.floor(options.moves / groups.length)
    for (let j = 0; j < movesByGroups; j++) {
      for (let k = 0; k < groups.length; k++) {
        const muscle = groups[k]
        const movesForMuscle = filteredMoves.filter((move) => {
          return move.group.includes(muscle)
        })
        const randomMoveForMuscle =
          movesForMuscle[Math.floor(Math.random() * movesForMuscle.length)]
        workout.moves.push(randomMoveForMuscle)
      }
    }
    const leftOver = options.moves % groups.length
    for (let x = 0; x < leftOver; x++) {
      const randomMoveFromGroups =
        filteredMoves[Math.floor(Math.random() * filteredMoves.length)]
      workout.moves.push(randomMoveFromGroups)
    }
  } else {
    for (let y = 0; y < options.moves; y++) {
      const randomMoveFromAll = data[Math.floor(Math.random() * data.length)]
      workout.moves.push(randomMoveFromAll)
    }
  }
  return workout
}

export default createWorkout
