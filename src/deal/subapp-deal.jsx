import { React, loadSubApp } from "subapp-react";
import axios from "axios"
const Deal = props => {
  const [user, setUser] = React.useState({});
  return <>
  <div>SPECIAL DEAL - SPECIAL DEAL - {props.deal}</div>
  <div> title: {user.title}</div>
  <button onClick={async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    setUser(response.data)
  }}>Durrab Remote Test</button>
  </>

};

export default loadSubApp({ name: "Deal", Component: Deal });
