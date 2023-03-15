import { Header, Articles, Profile } from "@/components";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <Articles />
      </HomeContainer>
    </>
  );
}
