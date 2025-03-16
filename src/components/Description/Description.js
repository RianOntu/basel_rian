import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Description = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10">
        <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col md:flex-row p-8">
          <div className="md:w-1/2">
            <h1>Description content goes here</h1>
          </div>
          <div className="md:w-1/2">
            <p>This is the description of the product.</p>
          </div>
        </div>
        <TabNavigation />
      </div>
      <Footer />
    </>
  );
};

export default Description;
