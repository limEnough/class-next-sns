import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

type Props = { children: ReactNode };

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={style.container}>
      {/* 헤더 */}
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            {/* 로고 */}
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={logo} alt="로고" width={32} height={50} />
              </div>
            </Link>

            {/* 네비게이션 */}
            <nav>
              <ul>
                <NavMenu />
              </ul>

              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>

            {/* 로그아웃 버튼 */}
            <LogoutButton />
          </div>
        </section>
      </header>

      {/* 콘텐츠 */}
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          {/* 메인 */}
          <main className={style.main}>{children}</main>

          {/* 우측 */}
          <section className={style.rightSection}>
            <div style={{ marginBottom: 60, width: "inherit" }}>
              <form className={style.search}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
                <input type="search" />
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
