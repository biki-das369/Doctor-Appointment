import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [call, setCall] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [docId, setDocId] = useState("");

  // async function bookedPage(e) {
  //   e.preventDefault();

  //   const newPatient = {
  //     firstName,
  //     lastName,
  //     email,
  //     call,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:3000/patients", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newPatient),
  //     });

  //     if (response.ok) {
  //       alert("✅ Booking saved successfully!");
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setCall("");
  //     } else {
  //       alert("❌ Failed to save booking!");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("⚠️ Something went wrong!");
  //   }
  // }

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    setDocId(id);
  }, [id]);

  console.log(docId);

  async function bookedPage(e) {
    e.preventDefault();
    console.log(time);
    console.log(date);

    if (!firstName || !lastName || !email || !call || !date || !time) {
      alert("Fill all the details");
    }

    // if (firstName.length < 3 || lastName.length < 3 || call.length !== 10) {
    //   alert("Enter correct details");
    // }

    const newPatient = {
      firstName,
      lastName,
      email,
      call,
      docId: id,
      date,
      time,
    };
    try {
      
      const response = await fetch("http://localhost:3000/patients", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (response.ok) {
        alert("Booking Sucessful");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCall("");
        setDate("");
        setTime("");
        setDocId("");
      } else {
        alert("Failed to Book");
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex w-[60%] ml-[300px] margin-auto justify-between mt-20">
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold mb-10 text-blue-600">
            Choose Date
          </h1>
          <input
            type="date"
            value={date}
            // min={Date.now}

            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold mb-10 text-blue-600">
            Choose Time
          </h1>
          <p>Set time by clicking the following</p>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
