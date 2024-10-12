/**
 * 1. 브라우저 직접 접근이거나(링크입력하여 접근)
 * 2. 새로고침 시
 * 노출되는 페이지
 */
// "use client"; => 주석! 다시 server component 가 됨
// server component 에서 client component import 가능하나, 반대 상황은 불가능

import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function LoginPage() {
  return <LoginModal />;
}
