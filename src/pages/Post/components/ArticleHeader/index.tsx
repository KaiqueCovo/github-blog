import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ArticleHeaderLinks, ArticleHeaderContainer, ArticleHeaderInformations } from './styles'

import { NavLink } from 'react-router-dom'

export function ArticleHeader() {
  return (
      <ArticleHeaderContainer>
        <ArticleHeaderLinks>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href='link' target="_blank" rel="noreferrer">
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ArticleHeaderLinks>

        <h1>ISSUE TITLE</h1>

        <ArticleHeaderInformations>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            kaiqueCovo
          </span>

          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
           Há 1 dia
          </span>

          <span>
            <FontAwesomeIcon icon={faComment} />
            5 comentários
          </span>
        </ArticleHeaderInformations>
      </ArticleHeaderContainer>
  )
}
