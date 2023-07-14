import { Head, Logo } from "./Header.styled";
import { GiBeerStein } from "react-icons/gi";
export const Header = () => {
  return (
    <Head>
      <Logo to="/">
        <GiBeerStein color="#cfe2f3" size={35} />
        Happy beers
      </Logo>
    </Head>
  );
};
