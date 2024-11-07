import Navigation from "./components/Navigation";
import PageHeader from "./components/pageHeader/PageHeader";
import headerImg from "./assets/header.webp";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className='app'>
      <Navigation />
      <div className='content'>
        <PageHeader
          title='SMAGFULDE FAVORITTER'
          subTitle='En verden af smag lige ved hånden'
          headerImg={headerImg}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
