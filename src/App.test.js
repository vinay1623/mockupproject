import { render, screen } from '@testing-library/react';
import App from './App';

function App(){
  return(
    <div className="App">
      <div className="posts">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Profile View</th>
          </tr>
      {
        Data.map(post =>{
          return(
            
              <tr>
            <td>{post.id}</td>
            <td><img src={post.avatar} alt="image" /></td>
            <td>{post.first_name}</td>
            <td>{post.last_name}</td>
            <td>{post.email}</td>
            <td>{post.gender}</td>
            <td>{post.ip_address}</td>
            <td><button name="view" onClick={()=> window.location.href='/Views'}>view</button></td>
            
            </tr>
            
             


            


          )
        })
      }
      </table>
      </div>
    </div>
  );
}
export default App;


