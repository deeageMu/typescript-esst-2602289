export function Challenge() {
  type MyType = String | false | Array<String | number>;
  type MyType2 = String | false | (String | number)[];
  
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];

  let fooMyType2: MyType2 = ["test", 100]
}

// change dir to this files parent
// npx tsc -p .