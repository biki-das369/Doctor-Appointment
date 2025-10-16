import { useState } from "react";

export default function BookingPage() {
  function bookedPage() {
    console.log(firstName, lastName, email, call);

    // const formData = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   call: call,
    // };

    // const jsonData = JSON.stringify(formData);
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [call, setCall] = useState(0);

  return (
    <>
      <div className="flex w-[60%] ml-[300px] margin-auto justify-between mt-20">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold mb-10 text-blue-600">
            Choose Date
          </h1>
          <input type="date" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold mb-10 text-blue-600">
            Choose Time
          </h1>
          <p>Set time by clicking the following</p>
          <input
            type="time"
            className="border-2 border-black my-3 px-2 py-1 font-bold "
          />

          <h1 className="text-2xl font-bold my-4 text-blue-600">Details</h1>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="border-2 border-black px-2"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border-2 border-black mx-2 px-2"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="border-2 border-black my-2 px-2"
          />
          <input
            value={call}
            onChange={(e) => setCall(e.target.value)}
            type="number"
            placeholder="Phone"
            className="border-2 border-black my-2 mx-2 px-2"
          />
          <button
            className="border-2 border-black my-3 px-2 py-1 font-bold bg-gray-200"
            onClick={bookedPage}
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
}
