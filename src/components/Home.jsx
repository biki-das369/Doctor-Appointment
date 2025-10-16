import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className=" p-10">
      <h1 className="text-5xl text-red-600 font-bold text-center">
        Choose Doctor
      </h1>
      <div className="flex w-[40%] ml-[400px] margin-auto justify-between mt-20">
        <Link to="bookingpage">
          <img src="female.jpg" alt="Female Doctor" />
        </Link>
        <Link to="bookingpage">
          <img src="male.jpg" alt="Male Doctor" />
        </Link>
      </div>
    </div>
  );
}
