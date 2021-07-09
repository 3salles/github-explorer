import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/components/repositories.scss'


const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/3salles/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => <RepositoryItem key={repository.id} repository={repository} />)}
      </ul>
    </section>
  );
}
