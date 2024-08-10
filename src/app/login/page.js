import LoginBox from "@/components/loginPage";
import Banner from "@/components/Banner";
import LatestFeeds from "@/components/LatestFeeds";

export default function Login() {
  return (
    <div className="h-full">
      <div className="h-4/5 flex">
        <div
          className="w-1/2"
          style={{
            backgroundColor: "lightblue",
          }}
        >
          <Banner />
        </div>
        <div className="h-full flex items-start justify-start p-40">
          <LoginBox />
        </div>
      </div>
      <div className="w-full">
        <h1>Latest Featured Posts</h1>
        <LatestFeeds />
      </div>
    </div>
  );
}
