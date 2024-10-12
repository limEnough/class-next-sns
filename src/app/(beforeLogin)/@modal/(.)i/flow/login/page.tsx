/**
 * 링크 이동시 접근되는 페이지
 * 
 * 📌 @라우트 parallel route
 * 
 * 두 페이지를 나란히, 동시에 보여줄 수 있는 기능
 * 두 page.tsx가 동일한 상위 폴더 내에 있어야 한다.
 
 * 📌 (.)라우트 intercepting route
 * 
 * (.)이나 (..)은 브라우저 주소 기준 => (..)으로 하면 beforeLogoin의 더 부모인 app으로 간다.
 * i/flow/login/page.tsx 가 아니라 app/(beforeLogin)/page.tsx 가 불리게끔 intercept
 */

// "use client"; => 주석! 다시 server component 가 됨
// server component 에서 client component import 가능하나, 반대 상황은 불가능

import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function parallelPage() {
  return <LoginModal />;
}
