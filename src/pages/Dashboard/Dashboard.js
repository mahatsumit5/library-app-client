import { CustomeCarousel } from "../../components/carousel/Carousel";
import { UserLayout } from "../../components/layout/UserLayout";

const Dashboard = () => {
  return (
    <UserLayout title="Dashboard">
      <div className="hero">
        <CustomeCarousel />
      </div>
    </UserLayout>
  );
};

export default Dashboard;
