import { Header } from '../../components/Header'
import { ArticleHeader } from './components/ArticleHeader'
import { PostContainer } from './styles'

export function Post() {
  return (
    <>
      <Header />

      <PostContainer>
        <ArticleHeader />
      </PostContainer>
    </>
  )
}
