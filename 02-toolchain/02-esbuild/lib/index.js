(() => {
  // src/hello.ts
  var hello = (...args) => {
    console.log(`Hello ${args.join(" , ")}`);
  };

  // src/index.ts
  var replyMessage = hello("Tom", "Jerry");
  console.log(replyMessage);
})();
