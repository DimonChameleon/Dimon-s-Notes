const numbers = [6, 3, 7, 9, 1]
const result = numbers.join()
console.log(result)

const join = (list, separator = ' ') => {
    let str = ''

    for (const n of list) {
        str += n + separator
    }

    return str.slice(0, str.length - separator.length)
}

console.log(join(numbers))

// 1)
console.log(join([1, 2, 3], '-'))
console.log(join(['a', 'b', 'c'], ''))
console.log(join([true, false], ','))
console.log(join([], '|'))

// 2)
const split = (str, separator) => {
  const result = []
  let temp = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      result.push(temp)
      temp = ''
    } else {
      temp += str[i]
    }
  }

  result.push(temp)
  return result
}

console.log(split(['a', 'b', 'c'], '-'))
