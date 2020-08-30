import React from "react";

export default function Demo2(): JSX.Element {
  const a = Object.assign({}, { a: 11, b: 1 }, { c: 3 });
  return <div>{a}</div>;
}
