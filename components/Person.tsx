import React = require('react');

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
};

type PersonProps = {
  firstName: String;
  lastName: String;
};
