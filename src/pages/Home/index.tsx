import { Header, Articles, Profile, Search } from "@/components";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <Search />
        <Articles />
      </HomeContainer>
    </>
  );
}
