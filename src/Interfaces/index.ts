interface IRepos {
  languages_url: string;
}

interface IResponseGitAPI {
  JavaScript: number,
  TypeScript: number,
  Python: number,
  PHP: number,
  Kotlin: number,
  Java: number,
  HTML: number,
  Go: number,
  Docker: number,
  CSS: number;
}

export type { IRepos, IResponseGitAPI };
