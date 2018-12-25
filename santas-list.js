function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function moveItem(list, newIndex, oldIndex) {
  return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0])
}

function isValid(key, testValue, invalid) {
  return !(invalid[key] || []).includes(testValue)
}

function randomizeList(list) {
  let randomList = [...list]
  for (var i = 0; i < randomList.length; i++) {
    let randomInt = getRandomInt(i, randomList.length)
    if(isValid(randomList[(i-1) % randomList.length], randomList[randomInt], invalid)) {
      moveItem(randomList, i, randomInt)
    } else {
      i -= 1
    }
  }
  return randomList
}

function main() {
  const list = ['shant', 'katrina', 'sanan', 'sako', 'arek', 'vrej', 'ani', 'haig', 'taline']

  const invalid = {
    shant: ['katrina'],
    katrina: ['shant'],
    sehrope: ['arek'],
    haig: ['taline', 'ani']
  }

  console.log(randomizeList(list))
  // console.log(isValid(null, null, invalid));
}

main()
