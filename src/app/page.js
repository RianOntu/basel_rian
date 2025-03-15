import AboutTheShop from "@/components/AboutTheShop/AboutTheShop";
import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Featured from "@/components/Featured/Featured";
import Grid from "@/components/Grid/Grid";
import LatestNews from "@/components/LatestNews/LatestNews";
import Navbar from "@/components/NavbarComponents/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import OurPartners from "@/components/OurPartners/OurPartners";
import Reviews from "@/components/Reviews/Reviews";
import ScrollToTopButton from "@/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Featured />
      <Grid />
      <AllProducts />
      <Newsletter />
      <LatestNews />
      <AboutTheShop />
      <Reviews />
      <OurPartners />
      <ScrollToTopButton />
    </>
  );
}
