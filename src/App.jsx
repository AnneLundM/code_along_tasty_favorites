import Navigation from "./components/Navigation";
import PageHeader from "./components/pageHeader/PageHeader";
import headerImg from "./assets/header.webp";

function App() {
  return (
    <>
      <Navigation />
      <PageHeader
        title='SMAGFULDE FAVORITTER'
        subTitle='En verden af smag lige ved hånden'
        headerImg={headerImg}
      />
    </>
  );
}

export default App;
