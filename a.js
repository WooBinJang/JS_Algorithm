var x = 11;

function foo(x) {
  x = 12;
  bar();
}

function bar() {
  console.log(x);
}

foo(x); // ?
bar(); // ?
