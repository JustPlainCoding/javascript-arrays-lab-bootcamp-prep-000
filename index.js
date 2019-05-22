var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kitten.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten() {
  kitten.shift();
  return kitten;
}

function appendKitten(name) {
  var result = kitten.concat(name);
  return result;
}

function prependKitten(name) {
  var result = [...kitten, name];
  return result;
}

function removeLastKitten() {
  var result = kitten.slice(1);
  return result;
}

function removeFirstKitten() {
  var result = kitten.slice(0, kitten.length - 1);
}