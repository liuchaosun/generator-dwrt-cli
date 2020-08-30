import React from 'react';

function testInclude() {
  console.log('foo'.includes('f'));
}

export default function Demo2(): JSX.Element {
  testInclude();
  const a = Object.assign({}, { a: 11, b: 1 }, { c: 3 });
  return <div>{a}</div>;
}
