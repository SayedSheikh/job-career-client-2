import React, { Suspense } from "react";
import useAuth from "../Hooks/useAuth";
import AppliedJobsTable from "../Components/AppliedJobsTable";
import Loding from "../Components/Loding";
// import { appliedJobs } from "../APIs/appliedJobsAPI";
import useAppliedAPI from "../APIs/useAppliedAPI";

const AppliedJobs = () => {
  const { user } = useAuth();

  const { appliedJobs } = useAppliedAPI();

  if (!user) {
    return <Loding></Loding>;
  }

  return (
    <div className="my-[60px]">
      <h1 className="text-4xl font-bold text-center mb-[40px]">
        My Applied Jobs
      </h1>
      <Suspense
        fallback={
          <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }>
        <AppliedJobsTable
          appliedJobs={appliedJobs(user.email)}></AppliedJobsTable>
      </Suspense>
    </div>
  );
};

export default AppliedJobs;
