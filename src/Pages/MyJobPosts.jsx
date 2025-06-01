import React, { Suspense } from "react";
import Loding from "../Components/Loding";
import useAuth from "../Hooks/useAuth";
import { submittedJobs } from "../APIs/submittedJobs";
import PostedJobsTable from "../Components/PostedJobsTable";

const MyJobPosts = () => {
  const { user } = useAuth();

  if (!user) {
    return <Loding></Loding>;
  }

  return (
    <div className="my-[60px]">
      <h1 className="text-4xl font-bold text-center mb-[40px]">
        My posted Jobs
      </h1>
      <Suspense
        fallback={
          <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }>
        <PostedJobsTable
          submittedJobs={submittedJobs(user?.email)}></PostedJobsTable>
      </Suspense>
    </div>
  );
};

export default MyJobPosts;
