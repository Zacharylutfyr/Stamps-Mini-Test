let hasil = [];

for (let i = 100; i >= 0; i--) {
  function bilanganPrima() {
    if (i <= 1) return false;
    if (i <= 3) return true;
    if (i % 2 === 0 || i % 3 === 0) return false;

    for (let j = 5; j * j <= i; j++) {
      if (i % j === 0 || i % (j + 2) === 0) return false;
    }
    return true;
  }

  if (!bilanganPrima()) {
    if (i === 0) {
      hasil.push("%");
    } else if (i % 3 === 0 && i % 5 === 0) {
      hasil.push("FooBar");
    } else if (i % 3 === 0) {
      hasil.push("Foo");
    } else if (i % 5 === 0) {
      hasil.push("Bar");
    } else {
      hasil.push(i);
    }
  }
}

console.log(hasil.join(", "));
