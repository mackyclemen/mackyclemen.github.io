import { Repository } from "@saber2pr/types-github-api";
import Card from "./Card";

const sideColor = {
    "width": "8px",
    "backgroundColor": "yellow",
    "color": "black"
}

const repoTitle = {
    "fontSize": "1.5rem",
    "fontWeight": 600,

}

export default function GithubRepoCard({repo}: {repo: Repository}) {
    return (
        <Card className="rounded">
            <div className="flex flex-row">
                <div style={sideColor}></div>
                <div className="flex flex-col p-5">
                    <h1 style={repoTitle}>{repo.full_name}</h1>
                    <p>{repo.description}</p>
                </div>
            </div>
        </Card>
    )
}