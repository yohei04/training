import React from "react";
import Link from "next/link";
import { Logo } from "../../atoms/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo width={40} height={40} />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
  );
};

export default Header;
