import { React } from "react";

const DisplayTable = ({data, repositories}) => {
    return (
        <div>
            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Bio</th>
                    <th scope="col">Repositories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.login}</td>
                        <td>{data.name}</td>
                        <td>{!data.avatar_url ? "" : (
                            <img className="img-thumbnail" 
                            src={data.avatar_url} alt={data.avatar_url}/>
                        )}</td>
                        <td>{data.bio}</td>
                        <td>{repositories.map(repo => (
                            <ul className="list-group" key={repo.name}>
                                <li className="list-group-item">
                                    <a href={repo.html_url} className="nav-link" target="_blank">{repo.name}</a>
                                </li>
                            </ul>
                        ))}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable;