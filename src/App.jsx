import Student from "./Student";
import Card from "./Card";
import Counter from "./Counter";
import MyComponent from "./assets/MyComponent";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30}/>
      <Card />
      <Counter />
      <MyComponent />
    </>
  );
}

export default App
