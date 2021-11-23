// import { useState } from "react";
// const Input = ({ route }) => {
//   const [input, setInput] = useState("");
//   console.log(input);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     fetch(`https://justclick-mern.herokuapp.com/search/${route}/${input}`)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="input-form">
//       <input
//         type="text"
//         name="title"
//         value={input}
//         className="form-control"
//         onChange={handleChange}
//         placeholder="Search..."
//       />
//       <button type="submit" className="btn btn-danger">
//         Search
//       </button>
//     </form>
//   );
// };
// export default Input;
