import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavbarComponents/Navbar";
import TabNavigation from "@/components/SinglePageTabs/SinglePageTabs";


const AdditionalInformation = ({ params }) => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10">
        <TabNavigation />
     
        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col md:flex-row p-8">
          <div className="md:w-1/2">
            <h1>Additional Information content goes here</h1>
          </div>
          <div className="md:w-1/2">
            <p>This is the additional information of the product.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdditionalInformation;
