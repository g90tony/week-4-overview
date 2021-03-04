Number.prototype.addTen = function () {
  return this + 10;
};
function main() {
  const aNumber = 30;

  console.log(aNumber.addTen());
}

function advFunctions() {
  const advFn = function (fn) {
    fn();
  };

  advFn(function main() {
    const aNumber = 30;

    console.log("advanced function output: ", aNumber.addTen());
  });
}
