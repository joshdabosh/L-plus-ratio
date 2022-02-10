import _ from 'underscore'

const LOGICAL_ARGUMENTS = [
  "don't care",
  "didn't ask",
  'cry about it',
  'stay mad',
  'get real',
  'L',
  'mald seethe cope harder',
  'basic',
  'skill issue',
  'you fell off',
  'the audacity',
  'triggered',
  'any askers',
  'repelled',
  'get a life',
  'ok',
  'and?',
  'cringe',
  'touch grass',
  'donowalled',
  'not based',
  'your a (insert stereotype)',
  "not funny didn't laugh",
  'you"re"',
  'grammar issues',
  'go outside',
  'get good',
  'reported',
  'ad hominem',
  'GG!',
  'ask deez',
  'ez clap',
  'straight cash',
  'ratio agian',
  'final ratio',
  'problematic',
  'ratio',
  'hedge-born',
  'unchivalrous',
  'thou hath the plague',
]

const BASE_AMOUNT = 7

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const orderRatios = (arr) => {
  let indices = [-1, -1, -1]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'ratio') {
      indices[0] = i
    } else if (arr[i] === 'ratio agian') {
      indices[1] = i
    } else if (arr[i] === 'final ratio') {
      indices[2] = i
    }
  }

  indices.sort((a, b) => a - b)

  let count = 0

  while (indices.length > 0) {
    const idx = indices.shift()

    if (idx === -1) continue

    if (count === 0) {
      arr[idx] = 'ratio'
    } else if (count === 1) {
      arr[idx] = 'ratio agian'
    } else if (count === 2) {
      arr[idx] = 'final ratio'
    }

    count++
  }

  return arr
}

const generateReply = () => {
  const amount =
    Math.floor(Math.random() * (LOGICAL_ARGUMENTS.length - BASE_AMOUNT)) +
    BASE_AMOUNT

  const selection = _.sample(LOGICAL_ARGUMENTS, amount)

  while (selection.join(' + ').length >= 280) {
    selection.shift()
  }

  return capitalize(orderRatios(selection).join(' + '))
}

export default generateReply
