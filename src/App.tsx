import "./App.css";
import { Input } from "./components/Input";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];
  return (
    <div className='App'>
      {/* <Greet name='Moinul' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList persons={nameList} /> */}
      {/* <Status status='success' /> */}
      {/* <Heading>Heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Greet name='Moinul' isLoggedIn={false} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Clicked!");
          console.log(event);
          console.log(id);
        }}
      /> */}
      <Input
        value=''
        handleChange={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
}

export default App;
