/**
 * tailwind => 호불호 심하고, 가독성 x
 * Styled Component or Emotion => Server Component SSR 와 문제
 * sass
 * css module => 간단하게 가자
 * vanila extract => Windows와 문제
 */
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Logo} alt="logo"></Image>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>

        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        {/* <Link href="/login" className={styles.login}>
          로그인
        </Link> */}
        <Link href="/i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
