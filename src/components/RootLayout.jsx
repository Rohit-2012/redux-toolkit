import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="w-[100vw] h-[100vh]">
      <h1 className="text-center p-2 shadow-md font-bold text-xl sticky top-0 left-0 bg-slate-50 w-full">Welcome! To the User control panel</h1>
          <Outlet />
    </main>
  );
};

export default RootLayout;
