import Header from "../components/headercomp/Header";
import TestHeader from "../components/headercomp/TestHeader";
import TestTwoHeader from "../components/headercomp/Testtwoheader";
import TosAccordion from "../components/legalcomps/TosAccordion";

export const metadata = {
    title: "Remote Connect | Terms and Conditions",
    
  };
  

export default function Legalpage() {
    return (

        <main><TestTwoHeader /><TosAccordion /></main>
    );
}
