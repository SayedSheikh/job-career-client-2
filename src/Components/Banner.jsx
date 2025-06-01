import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center mt-[10px] flex-col-reverse lg:flex-row min-h-[500px] gap-10">
      <div className="w-full lg:w-1/2 space-y-3 text-5xl font-bold">
        <motion.h1
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
            transition: { duration: 0.8 },
          }}
          style={{ originY: 1 }}>
          The{" "}
          <motion.span
            animate={{
              color: ["#ff2341", "#12f32f", "#432ff2"],
              transition: { duration: 2, repeat: Infinity },
            }}>
            Easiest{" "}
          </motion.span>
          Way
        </motion.h1>
        <motion.h1
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
            transition: { duration: 0.8 },
          }}
          style={{ originY: 1 }}>
          to Get Your New Job
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,

            transition: { duration: 1 },
          }}
          className="text-[20px] font-normal">
          Each month, more than 3 million job seekers turn to <br /> website in
          their search for work, making over 140,000 <br /> applications every
          single day
        </motion.p>
      </div>
      <div className="w-[70%] lg:w-1/2 overflow-x-auto">
        <div className="max-w-[400px] mx-auto lg:mx-0">
          <motion.img
            animate={{
              y: [40, 70, 40],
              transition: { duration: 4, repeat: Infinity },
            }}
            src="https://media.istockphoto.com/id/1430393066/photo/creative-startup-and-team-webinar-on-laptop-for-professional-internet-communication-in-office.jpg?s=612x612&w=0&k=20&c=mCwrbA9A1u4ezzncWOFOBx0NV3sykfx84ZRM_HdkjGw="
            alt=""
            className="w-[80%] lg:w-full rounded-t-4xl rounded-br-4xl border-l-[10px] border-b-[10px] border-primary"
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="max-w-[400px] mx-auto lg:mx-0 h-[200px]">
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 10, repeat: Infinity },
            }}
            src="https://thumbs.dreamstime.com/b/business-team-celebration-laptop-office-app-development-success-positive-client-feedback-web-developer-people-356601731.jpg"
            alt=""
            className="w-[80%] h-full lg:w-full rounded-t-4xl rounded-br-4xl border-l-[10px] border-b-[10px] border-primary"
            style={{
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
