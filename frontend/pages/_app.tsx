import "../styles/globals.css";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store/index";
import Header from "@/components/pageLayout/Header";
import Footer from "@/components/pageLayout/Footer";

function App({ Component, pageProps }: any) {
  return (
    <div id={"global-root"} >
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      <div id={"app-root"} className={"flex flex-col min-h-screen m-container"}>
        <Provider store={store}>
          <Header/>
          <div className={"flex justify-center grow"}>
            {(Component.getLayout || ((page: any) => page))(<Component {...pageProps} />)}
          </div>
          <Footer/>
        </Provider>
      </div>
    </div>
  );
}

export default App;
