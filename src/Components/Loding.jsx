import Lottie from "lottie-react";
import React from "react";
import loginLottie from "../../src/Lotties/loading.json";

const Loding = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] flex justify-center items-center">
      <Lottie animationData={loginLottie}></Lottie>
    </div>
  );
};

export default Loding;
<Lottie></Lottie>;
