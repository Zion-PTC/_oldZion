import React from "react";

export default function Digital(props: {
  Parent: (props: { children: JSX.Element }) => JSX.Element;
}) {
  const { Parent } = props;
  return (
    <Parent>
      <div>Digital</div>
    </Parent>
  );
}
