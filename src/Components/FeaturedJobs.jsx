import React, { use } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = ({ fetchPromise }) => {
  const data = use(fetchPromise);

  return (
    <div className="mt-[60px] mb-[70px]">
      <h1 className="text-4xl font-bold mb-[20px]">Featured jobs</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
        {data.map((item) => (
          <JobCard key={item._id} job={item}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
