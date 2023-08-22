"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { store } from "@/utils/redux/store";
import { Provider } from "react-redux";

const AppProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
};

export default AppProvider;
