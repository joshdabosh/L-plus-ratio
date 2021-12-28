import _ from 'underscore'

const LOGICAL_ARGUMENTS = [
  "Don't care",
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
]

const BASE_AMOUNT = 7

const generateReply = () => {
  const amount =
    Math.floor(Math.random() * (LOGICAL_ARGUMENTS.length - BASE_AMOUNT)) +
    BASE_AMOUNT

  const selection = _.sample(LOGICAL_ARGUMENTS, amount)

  selection.push('ratio')

  while (selection.join(' + ').length >= 280) {
    selection.shift()
  }

  return selection.join(' + ')
}

export default generateReply
