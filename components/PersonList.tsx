import React = require('react');

type PersonListProps = {
  names: {
    first: String;
    last: String;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h1>
          {name.first} {name.last}
        </h1>
      ))}
    </div>
  );
};
