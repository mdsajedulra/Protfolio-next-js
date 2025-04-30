import Footer from "@/components/modules/Home/sheared/Footer";
import Navbar from "@/components/modules/Home/sheared/Navbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default Providers;
