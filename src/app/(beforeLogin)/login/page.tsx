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
import Main from "../_component/main";

export default function LoginRoute() {
  const router = useRouter();

  // router.push
  // localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login

  // router.replace
  // localhost:3001 -> localhost:3001/i/flow/login
  router.replace("i/flow/login");

  return (
    // 배경을 깔아주기 위해 main 내용 복붙 (children 맞춰줌)
    <Main />
  );
}
