function simpleMemoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }

        return cache.get(key);
    }
}

function sum(a, b) {
  console.log('sum execute');
  return a + b;
}

const memoSum = simpleMemoize(sum);

memoSum(3,3);
memoSum(3,3);



