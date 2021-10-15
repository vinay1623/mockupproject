import logo from './logo.svg';
import './App.css';
import Data from "./MOCK_DATA.json"

function App() {
  return (
    <div className="App">
      <div className="posts">
      {
        Data.map(post =>{
          return(
            <div key={post.id}  className="post">
            <h4>id:{post.id}</h4>
            <img src={post.avatar} alt="image" />
            <p>First Name:{post.first_name}</p>
            <p>Last Name: {post.first_name}</p>
            <p>Email:{post.email}</p>
            <p>Gender:{post.gender}</p>
            <p>IP Address:{post.ip_address}</p>
            </div> 
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
