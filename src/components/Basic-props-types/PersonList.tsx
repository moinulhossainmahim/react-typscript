import { Name } from "./Person.types";

type personlistProps = {
  persons: Name[];
};

const PersonList = (props: personlistProps) => {
  return (
    <div>
      {props.persons.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
