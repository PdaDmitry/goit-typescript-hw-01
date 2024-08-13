function merge(objA, objB) {
  return Object.assign(objA, objB);
}

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;
