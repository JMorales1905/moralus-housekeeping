import Image from "next/image";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className={sans.className}>
      {/* Navbar will have two sections, Left side will be logo and right side will be menus */}
      <nav className="h-[54px]" id="home">
        <div className="bg-white text-black flex w-[100%] h-[5vh] items-center fixed shadow-md shadow-black/5">
          <section className="flex-1 ml-8">Logo</section>
          <section className="flex-1 flex justify-evenly text-[20px]">
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#services">Services</a>
          </section>
        </div>

      </nav>

      <div className="text-black h-[10vh]">
        <div className="grid justify-center bg-light-2 h-full rounded-md items-center text-[40px] font-semibold">
          Moralus Housekeeping Services
        </div>

        <section className="bg-white" id="about-us">
          <div className="grid justify-center text-center px-[30%] py-[50px] gap-y-9">
            <h1 className="text-[35px]">Our Promise</h1>
            <p className="text-[20px]">
              Moralus' Housekeeping Services offers housekeeping that suites
              the interest of personal home owners looking for a detailed and more personal
              approach to Housekeeping. Our hope is to provide you with a dependable and
              consistent service with flexible schedules and a
              variety of plans: From doing laundry to cleaning patios.
              Our services are located in the valley from La Quinta, Indio, Palm Springs and more.
            </p>

            <h1 className="text-[35px]">Our Story</h1>
            <p className="text-[20px]">
              Meet the woman who made it all possible: Blanca Morales.
              After immigrating from Guatemala, Blanca found herself in the land of dreams and
              after working with a cleaning company for two years, decided to take her personal approach
              to the business. Now, Blanca works with her own clients who she has earned the trust of
              and provides her cleaning services to them on a weekly/monthly basis. Blanca would be honored
              to provide you with twelve years of housekeeping service and a personal experience you
              won't find with large-scale cleaning companies. She brings to the table services you could only find
              with her family, where Blanca take pride in the cleanliness of her home.
            </p>

          </div>
        </section>

        <section className="bg-white h-[100vh]" id="services">
          <div className="flex justify-center items-center h-full gap-8">
            <div className="grid text-center">
              <div className="bg-slate-300  p-8 rounded-md">
                <h2 className="text-[25px]">Phone Number</h2>
                <p>For English: (760) 905-6102</p>
                <p>Para Español: (760) 984-8227</p>
              </div>
              <div className="bg-slate-300 p-8 rounded-md">
                <h2 className="text-[25px]">Email:</h2>
                <p>Moralus.housekeeping@gmail.com</p>
              </div>
              <div className="bg-slate-300 p-8 rounded-md">
                <h2 className="text-[25px]">Follow Us:</h2>
                {/* social media links */}
              </div>
            </div>
            <p className="text-center text-[20px]">Schedule a quote over the phone or for a more peronal experience, let us visit your home in person. <br />
              Tell us what services you desire and what day of the week works best for you and we'll give you a quote.
              <br />Of course, it's <span className="text-[20px]">FREE!</span></p>

          </div>
        </section>

        <footer className="bg-white flex justify-evenly p-6 items-center">
          <div>
            <h2 className="text-[25px]">Company logo</h2>
            <p> We would feel privileged to service you!</p>
            <p>If you can't make a call during our hours, feel free to send a text message!</p>
          </div>

          <div>
            <h2 className="text-[25px]">Call Hours</h2>
            <ul>
              <li className="border-black border-b-[1px]">Monday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Tuesday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Wednesday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Thursday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Friday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Saturday: 3pm - 9pm</li>
              <li className="border-black border-b-[1px]">Sunday: 3pm - 9pm</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
