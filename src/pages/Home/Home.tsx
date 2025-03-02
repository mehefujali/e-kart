import Feature from "../../components/Feature";
import Hero from "../../components/Hero";
import Products from "../../components/Products";

const Home = () => {
      
      return (
            <div>
                  <div>
                    <Hero/>
                  </div>
                  <div>
                        <Feature/>
                  </div>
                  <div>
                        <Products/>
                  </div>
            </div>
      );
};

export default Home;