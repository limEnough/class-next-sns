/*
  NOTI: [서버 리다이렉트]
  메인에서 해당 페이지를 거쳐 리다이렉트 시켰을 때, 인터셉트 라우트가 제대로 동작하지 않았던 이슈
  컴포넌트는 기본적으로 서버 컴포넌트로 이루어지기에 해당 페이지에서도 서버에서 리다이렉트 시키고 있는데,
  인터셉팅 라우트는 서버가 아닌, 클라이언트에서 넘어갈 때 관여를 하는 원리이기 때문에 발생한 이슈
  => 클라이언트 리다이렉트로 변경하면서 해결
*/

// 서버에서 리다이렉트 하는 방법
// import { redirect } from "next/navigation";

// export default function LoginRoute() {
//   redirect("/i/flow/login");
// }

// 클라이언트에서 리다이렉트 하는 방법
"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";

export default function LoginRoute() {
  const router = useRouter();

  // router.push
  // localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login

  // router.replace
  // localhost:3001 -> localhost:3001/i/flow/login
  router.replace("i/flow/login");

  return (
    // 배경을 깔아주기 위해 main 내용 복붙 (children 맞춰줌)
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
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
