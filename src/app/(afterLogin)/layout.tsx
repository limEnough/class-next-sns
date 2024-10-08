// 페이지를 넘나들때 리렌더링 되지 않는, 말 그대로 뼈대 구조
export default function AfterLoginLayout({ children }) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
    </div>
  );
}
