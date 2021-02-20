import { useState } from 'react';
import './App.css';
import DisplayTable from './DisplayTable';

const App = () => {

  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e =>{
    setUsername(e.target.value);
  }

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log( profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if(profileJson){
      setData(profileJson);
      setRepositories(repoJson);
    }

  }

  return(
    <>
    <div className="container my-5">
    <h4 className="mb-3 text-center">Github User Finder</h4>
    <div className="row d-flex justify-content-center">
      <div className="col-auto">
        <input type="text" className="form-control" value={username} onChange={onChangeHandler}/>

      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>Search</button>
      </div>
    </div>
    <DisplayTable data={data} repositories={repositories}/>
    
    </div>
    </>
  );
}

export default App;
