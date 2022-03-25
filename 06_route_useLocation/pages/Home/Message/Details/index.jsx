import React from 'react'
import {useLocation} from 'react-router-dom'

// export default class Details extends Component {
//     componentDidMount() {
//         const {id, title} = useParams();
//     }
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
const DetailsData = [
    {id: 1, content: "Hello, this is details001"},
    {id: 2, content: "Hello, this is details002"},
    {id: 3, content: "Hello, this is details003"}
]

export default function Details () {
    const location = useLocation();
    const search = location.search;
    const res = new URLSearchParams(search);
    const findDetailsData = DetailsData.find(item => item.id === Number(res.get('id')));
    return (
        <ul>
            <li>ID: {res.get('id')}</li>
            <li>Title: {res.get('title')}</li>
            <li>Content: {findDetailsData.content}</li>
        </ul>
    )
}