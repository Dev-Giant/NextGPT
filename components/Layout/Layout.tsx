import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../Logo.png";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const routes = ["/", "/sales", "/marketing", "/recruitment"];
  const navbars = ["General", "Sales", "Marketing", "Recruitment"];

  return (
    <div className={styles.mainBody}>
      <div className={styles.navPanel}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <ul className={styles.navbar}>
          {routes.map((route, index) => (
            <li key={route + index} className={router.pathname == route ? styles.active : ""}>
              <Link
                href={route}
              >
                {navbars[index]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.mainPanel}>
        <p className="text-end">Account Info Itp.</p>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
