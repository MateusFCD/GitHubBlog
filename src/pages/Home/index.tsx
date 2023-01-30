import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Profile />
    </Container>
  );
}
