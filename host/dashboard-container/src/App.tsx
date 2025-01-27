import { lazy } from "react";

const Dashboard = lazy(() => import("dashboard_remote/App"));

function App() {
  return (
    <>
      <div className=" flex justify-center items-center h-[20rem]">
        <p className="text-black bg-yellow-200  text-[2rem]">
          Host App style works 
        </p>
      </div>
      <div className=" flex justify-center items-center h-[20rem]">
        <p>
          <Dashboard />
        </p>
      </div>

      <div>
        <p className="pt-[10rem] flex justify-center text-[19px]">
          The problem:  When I run both projects in development, the Tailwind
          classes are applied. However, when I run build && preview for both
          projects, the Tailwind classes from the remote are not applied.
        </p>
      </div>
    </>
  );
}

export default App;
