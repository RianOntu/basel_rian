import AllProducts from "@/components/AllProducts/AllProducts";
import Banner from "@/components/Banner/Banner";
import Featured from "@/components/Featured/Featured";
import Grid from "@/components/Grid/Grid";
import Navbar from "@/components/NavbarComponents/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
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
      <ScrollToTopButton />
    </>
  );
}
