import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import CSSReset from "../theme/components/CSSReset";
import MyThemeProvider from "../theme/contexts/ThemeContext";

export default () => {
  return (
    <>
      <MyThemeProvider>
        <CSSReset />
        <Header />
        <MainContent />
        <Footer />
      </MyThemeProvider>
    </>
  );
};
