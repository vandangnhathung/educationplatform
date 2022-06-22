import Category from "./modules/content/category/Category";
import Content from "./components/content/Content";
import HeaderLayout from "./components/header/HeaderLayout";
function App() {
  return (
    <>
      <HeaderLayout></HeaderLayout>
      <Content></Content>
      <EvaluateAndLocate></EvaluateAndLocate>
    </>
  );
}

export default App;
