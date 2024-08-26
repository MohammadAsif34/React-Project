import React from "react";

export default function footer(props) {
  const quickLinks = ["dashboard", "project", "team"];
  const icon = [
    { name: "instagram", icon: "bi bi-instagram" },
    { name: "threads", icon: "bi bi-threads" },
    { name: "facebook", icon: "bi bi-facebook" },
    { name: "youtube", icon: "bi bi-youtube" },
    { name: "linkedin", icon: "bi bi-linkedin" },
    { name: "twitter", icon: "bi bi-twitter-x" },
  ];
  const contacDetails = [
    { name: "phone", icon: "bi bi-telephone", value: "+91 - 7980023174" },
    { name: "whatsapp", icon: "bi bi-whatsapp", value: "+91 - 7250761747" },
    { name: "email", icon: "bi bi-envelope", value: "shadow@gmail.com" },
    {
      name: "address",
      icon: "bi bi-geo-alt",
      value: "92, west chowbhaga , kol-100",
    },
    { name: "website", icon: "bi bi-globe", value: "abc.com" },
  ];
  return (
    <div id="footers" className={` bg-${props.mode}`}>
      <div className="border-b-2  pb-4">
        <div className=" px-12 text-white flex  flex-wrap">
          <div className=" w-2/5 pr-16 grow shrink  ">
            <h1 className="text-4xl capitalize font-medium py-4">about</h1>
            <p className="indent-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              tenetur labore aut, rem consectetur magni adipisci. Ipsam
              accusamus illo tempore fugit molestias eos expedita totam!
              Blanditiis iste voluptatibus quae porro.
            </p>
            {/* social links icon */}
            <div className="icon flex text-2xl mt-8 ">
              {icon.map((item, index) => (
                <a href="" key={index} className="text-3xl mr-4 my-5">
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
            {/* contact details  */}
            <div className="container">
              {contacDetails.map((item, index) => (
                <li className="list-none" key={index}>
                  <i className={item.icon}></i>&nbsp;&nbsp;
                  {item.value}
                </li>
              ))}
            </div>
          </div>
          <div className="p-2 w-1/5 grow shrink">
            <h1 className="text-4xl capitalize font-medium py-4">
              quick links
            </h1>
            <div className="flex flex-col">
              {quickLinks.map((item, index) => (
                <a href="" key={index}>
                  <i className="bi bi-caret-right"></i>&nbsp;&nbsp;
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="p-2 w-2/5 grow shrink ">
            <h1 className="text-center text-4xl font-medium capitalize py-4">
              contact us
            </h1>
            <div className="container px-16 box-border">
              <form
                action="https://formsubmit.co/shadowforever34@gmail.com"
                method="POST"
                className="text-gray-500 text-lg"
              >
                <input
                  type="text"
                  name="first name"
                  id="fname"
                  placeholder="Frist name.."
                  className="border grow  w-full m-1 p-1 px-3 rounded-lg"
                />
                <input
                  type="text"
                  name="last name"
                  id="lname"
                  placeholder="Last name.."
                  className="border grow w-full m-1 p-1 px-3 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email.."
                  className="border grow  w-full m-1 p-1 px-3 rounded-lg"
                />
                <input
                  type="number"
                  name="number"
                  id="ph"
                  placeholder="Phone number.."
                  className="border grow  w-full m-1 p-1 px-3 rounded-lg"
                />
                <textarea
                  name="message"
                  id="message"
                  className="border w-full h-36 m-1  p-1 px-3 rounded-lg resize-none"
                  placeholder="Message..."
                />
                <button className="w-full m-1 p-1 bg-teal-900 border-2 text-center text-xl text-white rounded-lg capitalize">
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner py-3 ">
        <div className="container flex px-12 text-white">
          <div className="w-1/2 p-2 ">
            <h1>all rights reverserved || &copy;2024-2026</h1>
          </div>
          <div className="w-1/2 p-2 text-right">
            Developed &hearts; By : shaodw
          </div>
        </div>
      </div>
    </div>
  );
}
