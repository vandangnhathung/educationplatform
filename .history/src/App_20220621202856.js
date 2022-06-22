import Content from "./modules/content/Content";
import HeaderLayout from "./components/header/HeaderLayout";
import Footer from "./components/footer/Footer";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
