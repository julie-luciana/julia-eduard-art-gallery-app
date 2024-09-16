import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const Wrapper = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: var(--color-primary);
  height: 70px;
  display: flex;
  z-index: 50;
  border: none;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100%;
  margin: 0;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  text-transform: uppercase;
  font-family: "Helvetica", sans-serif;
  font-size: 0.9rem;
  font-weight: 100;

  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "grey" : "var(--color-secondary)")};

  border: 1px solid transparent;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ $isActive }) => ($isActive ? "var(--color-hover)" : "grey")};
  }
`;

export default function Navigation() {
  const router = useRouter();
  return (
    <Wrapper>
      <List>
        <li>
          <LinkButton href="/" $isActive={router.pathname === "/"}>
            Spotlight
          </LinkButton>
        </li>

        <li>
          <LinkButton
            href="/art-pieces"
            $isActive={router.pathname === "/art-pieces"}
          >
            Pieces
          </LinkButton>
        </li>

        <li>
          <LinkButton
            href="/favorites/favorites"
            $isActive={router.pathname === "/favorites/favorites"}
          >
            My Favorites
          </LinkButton>
        </li>
      </List>
    </Wrapper>
  );
}
