import {
  ArticleBody,
  ArticlesContainer,
  Article,
  ArticleTitle,
} from "./styles";

export function Articles() {
  const articles = [1, 2, 3, 4, 5, 6];

  return (
    <ArticlesContainer>
      {articles.map(() => (
        <Article>
          <ArticleTitle>
            <h2>Titulo</h2>
            <span>Há 1 dia</span>
          </ArticleTitle>

          <ArticleBody>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </ArticleBody>
        </Article>
      ))}
    </ArticlesContainer>
  );
}
