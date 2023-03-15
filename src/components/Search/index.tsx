import { SearchContainer, SearchHeader } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchHeader>
        <h5>Publicações</h5>
        <span>0 publicações</span>
      </SearchHeader>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
}
