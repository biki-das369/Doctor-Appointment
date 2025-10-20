import { Link } from "react-router-dom";
import female from "../../public/female.jpg";
import male from "../../public/male.jpg";
import data from "../../data/data.json";
import Card from "./Card";

const imgMap = {
  "female.jpg": female,
  "male.jpg": male,
};

export default function Home() {
  return (
    <div className=" p-10">
      <h1 className="text-5xl text-red-600 font-bold text-center">
        Choose Doctor
      </h1>
      <div className="flex w-[40%] ml-[400px] margin-auto justify-between mt-20">
        {/* <Link to="bookingpage">
          <img src="female.jpg" alt="Female Doctor" />
        </Link>
        <Link to="bookingpage">
          <img src="male.jpg" alt="Male Doctor" />
        </Link> */}

        {data.doctors.map((dr, index) => {
          return (
            <Card key={index} id={dr.id} name={dr.name} img={imgMap[dr.img]} />
          );
        })}
      </div>
    </div>
  );
}
