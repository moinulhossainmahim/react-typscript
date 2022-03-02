import { personProps } from "./Person.types";

function Person(props: personProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
