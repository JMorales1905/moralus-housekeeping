import Image from "next/image";

export default function Home() {
  return (

    <div>
      {/* Navbar will have two sections, Left side will be logo and right side will be menus */}
      <nav className="bg-white text-black flex h-[5vh] items-center">
        <section className="flex-1 ml-8">Logo</section>
        <section className="flex-1 flex justify-center">Menus</section>
      </nav>

      <section className="text-black h-[10vh]">
        <div className="grid justify-center bg-light-2 h-full rounded-md items-center">
          Moralus House Cleaning Services
        </div>
        <div className="bg-light h-[100vh]">
          <div className="flex justify-center items-center h-full gap-8">
            <div className="grid">
              <div>Phone Number</div>
              <div>Email</div>
              <div>Follow Us</div>
              {/* <p>phone, email and times of contact section</p>
              <p>remember to include social media and potentialy creat a new email
                for the business
              </p> */}
            </div>
            <div>House Cleaning Done Right</div>
          </div>
        </div>
        <footer className="bg-white">FOOTER?</footer>
      </section>
    </div>
  );
}
