function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function moveItem(list, newIndex, oldIndex) {
  return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0])
}

function isValid(key, testValue, invalid) {
  return !(invalid[key] || []).includes(testValue)
}
