import { Header, Article, Profile } from "@/components";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <Article />
      </HomeContainer>
    </>
  );
}
