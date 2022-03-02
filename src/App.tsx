import List from "./components/Generic/List";
const App = () => {
  return (
    <>
      <div className='App'>
        {/* <List
          items={["Batman", "Superman", "Wonder woman"]}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
        <List
          items={[
            {
              id: 1,
              first: "Bruce",
              last: "Wayne",
            },
            {
              id: 1,
              first: "Clark",
              last: "Kent",
            },
            {
              id: 1,
              first: "Pricess",
              last: "Diana",
            },
          ]}
          onClick={(item) => console.log(item)}
        />
      </div>
    </>
  );
};

export default App;
