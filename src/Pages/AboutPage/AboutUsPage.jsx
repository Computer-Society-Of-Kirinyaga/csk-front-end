import React from "react";
import PublicAppBar from "../../Components/AppBars/PublicAppBar";
import Introduction from "./Introduction/Introduction";
import MLSA from "./MLSA/MLSA";
import GDSC from "./GDSC/GDSC";
import Footer from "../../Components/Footer/Footer";

function AboutUsPage() {
  return (
    <>
      <PublicAppBar />
      <Introduction />
      <MLSA />
      <GDSC />
      <Footer />
    </>
  );
}

export default AboutUsPage;
