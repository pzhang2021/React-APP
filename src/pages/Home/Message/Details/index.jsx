import React from "react";
import { useLocation } from "react-router-dom";

const DetailsData = [
  { id: 1, content: "Hello, this is details001" },
  { id: 2, content: "Hello, this is details002" },
  { id: 3, content: "Hello, this is details003" },
];

// export default class Details extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <ul>
//                 <li>ID</li>
//                 <li>Title</li>
//                 <li>Content</li>
//             </ul>
//         )
//     }
// }

export default function Details() {
  const { state } = useLocation();
  const findDetailsData = DetailsData.find((item) => item.id === state.id);
  console.log(state);
  return (
    <ul>
      <li>ID: {state.id}</li>
      <li>Title: {state.title}</li>
      <li>Content: {findDetailsData.content}</li>
    </ul>
  );
}
