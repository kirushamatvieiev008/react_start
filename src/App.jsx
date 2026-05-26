import "./App.css";

// function App() {

//   return (
//     <>

//     </>
//   )
// }

// export default App

const users = [
  {
    id: 1,
    name: "Kiril",
    age: 18,
    city: "Kyiv",
    isOnline: true,
  },
  {
    id: 2,
    name: "Anna",
    age: 20,
    city: "Lviv",
    isOnline: false,
  },
  {
    id: 3,
    name: "Oleg",
    age: 25,
    city: "Odesa",
    isOnline: true,
  },
  {
    id: 4,
    name: "Sofia",
    age: 19,
    city: "Dnipro",
    isOnline: false,
  },
  {
    id: 5,
    name: "Max",
    age: 22,
    city: "Kharkiv",
    isOnline: true,
  },
];

const message = "hello world";
// const is = `some_${el.id}`
const link_image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtmcKMAebCm9m1vdU5CJvbCUKMNLnaw3IRw&s";

export const App = () => {
  return (
    <>
      <h1>{message}</h1>
      <img
        src={link_image}
        alt="dog"
      />
      <ul>
        {users.map(el => {
          return (<li key={el.id}>
            <h2>name: {el.name}</h2>
            <p>age: {el.age}</p>
            <p>city: {el.city}</p>
            <p>is online?: {el.isOnline ? "oline" : "ofline"}</p>
            </li>)
        })}
      </ul>
    </>
  );
};

// export default App
