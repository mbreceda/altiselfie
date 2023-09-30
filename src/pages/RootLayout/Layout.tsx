import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <main>
        <div id="showcase">
          <Outlet />
        </div>
      </main>
    </>
  );
}
