import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { loadFood, selectFoodInfo } from "../../store/features/getFoodSlice";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Layout() {

  const { status } = useSelector(selectFoodInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadFood("BEST_FOOD"));
    }
  }, [status, dispatch]);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
