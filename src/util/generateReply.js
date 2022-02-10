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

// limitation: each entry may only be in one list
const ORDERED_RATIOS = [
  ['ratio', 'ratio agian', 'final ratio'],
  ['GG!', 'skill issue'],
  ['ok', 'and?'],
]
// Map<entry, [listId, order]>
const ORDERED_RATIOS_MAP = new Map(
  ORDERED_RATIOS.flatMap((list, listIndex) =>
    [...list.entries()].map(([index, value]) => [value, [listIndex, index]])
  )
)

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const orderRatios = (arr) => {
  let indices = new Map()
  let ordered = new Map()
  for (let i = 0; i < arr.length; i++) {
    let entry = ORDERED_RATIOS_MAP.get(arr[i])
    if (entry) {
      const listId = entry[0]
      let indexList = indices.get(listId)
      if (!indexList) {
        indexList = []
        indices.set(listId, indexList)
      }
      indexList.push(i)

      let orderList = ordered.get(listId)
      if (!orderList) {
        orderList = []
        ordered.set(listId, orderList)
      }
      orderList.push([arr[i], entry[1]])
    }
  }
  for (let [listId, indexList] of indices) {
    let orderList = ordered.get(listId)
    if (orderList.length <= 1) continue
    orderList.sort((a, b) => a[1] - b[1])
    for (let idx of indexList) {
      arr[idx] = orderList.shift()[0]
    }
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
