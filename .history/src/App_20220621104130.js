import Category from "./modules/content/category/Category";
import Content from "./modules/content/Content";
import HeaderLayout from "./components/header/HeaderLayout";
import EvaluateAndLocate from "./modules/content/EvaluateAndLocate/EvaluateAndLocate";
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
