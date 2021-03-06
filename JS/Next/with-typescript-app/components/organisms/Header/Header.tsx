import React from "react";
import Link from "next/link";
import { Logo } from "../../atoms/Logo";

import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo width={40} height={40} />
      <nav className={clsx(styles.nav, 'sspace-x-3')}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/posts">
          <a>Posts List</a>
        </Link>
        <Link href="/users">
          <a>Users List</a>
        </Link>
        <a href="/api/users">Users API</a>
      </nav>
    </header>
  );
};

export default Header;
