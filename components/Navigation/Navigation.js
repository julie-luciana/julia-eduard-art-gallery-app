import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li>
        <Link href="/favorites/favorites">My Favorites</Link>
      </li>
    </ul>
  );
}
