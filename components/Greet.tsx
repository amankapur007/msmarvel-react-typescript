type GreetProps = {
  name: String;
  messageCount: Number;
  isLogedIn: Boolean;
};
import React = require('react');

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogedIn
          ? `Welcome ${props.name} , you have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
