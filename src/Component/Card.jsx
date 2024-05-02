import najatul from "../assets/najatul.jpg";
import najatul1 from "../assets/1.jpg";
import najatul2 from "../assets/2.jpg";
import najatul3 from "../assets/3.jpg";
import najatul4 from "../assets/4.jpg";
import "./card.css";

const Card = () => {
  return (
    <div>
      {/* Section Title start here  */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">Cards</h1>
      </div>
      <hr className="my-10"/>

      {/* Card Start here */}


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {/* Card No.01  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.02  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul1} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.03  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul2} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.04  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul3} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.05  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul4} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.06  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.07  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul1} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.08  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul2} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.09  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul4} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.10  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>
        {/* Card No.11  */}
        <div className="box">
          <div className="card">
            <div className="image-front">
              <img src={najatul2} alt="profile picture" />
            </div>
            <div className="image-back">
              <h2 className="text-base font-bold">Md Najatul Islam</h2>
              <p className="text-sm m-1 uppercase">Mern stack developer</p>
              <button className="bg-white p-1 mt-3 rounded-lg text-black uppercase font-bold hover:tracking-[.1rem] transition-all">
               <a href="https://najatul6-cbc29.web.app/" target="_blank">hire me</a>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
