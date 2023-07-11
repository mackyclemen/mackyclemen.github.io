"use client";

import { Octokit } from "octokit";
import { useState } from "react";
import GithubRepoCard from "./components/GithubRepoCard";
import { Repository } from "@saber2pr/types-github-api";

export default function Home() {
  const [response, setResponse] = useState<Repository[]>()

  const octokit = new Octokit({
    userAgent: "mackyclemen-github-io/0.0.1",
    auth: process.env.GH_PERSONAL_TOKEN
  })

  octokit.request('GET /users/{username}/repos', {
    username: 'mackyclemen',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then(r => setResponse(r.data as Repository[]))

  return (
    <div className="md:px-64 py-16">
      <div className="flex flex-col gap-4">
        <h1>Repositories</h1>
      </div>
    </div>
  )
}
