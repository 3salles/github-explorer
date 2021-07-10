import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/components/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/3salles/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository, index) => <RepositoryItem key={index} repository={repository} />)}
      </ul>
    </section>
  );
}
