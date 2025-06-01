import { Suspense } from "react";
import Banner from "../Components/Banner";
import FeaturedJobs from "../Components/FeaturedJobs";

const fetchPromise = fetch("http://localhost:3000/allJobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<p>Loading...</p>}>
        <FeaturedJobs fetchPromise={fetchPromise}></FeaturedJobs>
      </Suspense>
    </div>
  );
};

export default Home;
