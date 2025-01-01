import Link from "next/link";

export default function NavLink({ children, url, addClass = "" }) {
  return (
    <li>
      <Link
        href={url}
        className={`block py-2 px-3 rounded ${addClass}`}
      >
        {children}
      </Link>
    </li>
  );
}