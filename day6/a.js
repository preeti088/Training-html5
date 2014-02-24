function adder(base) {
  base = Number(base);
  for (var i = 0; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}