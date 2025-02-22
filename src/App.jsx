import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";

// Load all images from assets folder
const images = import.meta.glob("/src/assets/*.jpg", { eager: true, import: "default" });


// Function to get image dynamically
const getImage = (filename) => images[`/src/assets/${filename}`] || filename;

// Champion data using local images
const champions = [
  { 
    id: 1, 
    name: "Aatrox", 
    image: getImage("aatrox-lol-splash-art-uhdpaper.com-hd-357.jpg"), 
    skins: [
      { name: "Default", image: getImage("aatrox-lol-splash-art-uhdpaper.com-hd-357.jpg") },
      { name: "Mecha", image: getImage("blood-moon-aattrox-splash-art.jpg") },
      { name: "Blood Moon", image: getImage("mecha-aatrox-lol-skin-splash-art-hd-wallpaper-uhdpaper.com-683@1@l.jpg") }
    ]
  },
  {
    id: 2,
    name: "Ahri",
    image: getImage("ahri-lol-splash-art-uhdpaper.com-hd-842.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri-lol-splash-art-uhdpaper.com-hd-842.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },
  {
    id: 3,
    name: "Akali",
    image: getImage("akali-lol-splash-art-uhdpaper.com-hd-265.jpg"),
    skins: [
      { name: "Default", image: getImage("akali-lol-splash-art-uhdpaper.com-hd-265.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },
  {
    id: 4,
    name: "Akshan",
    image: getImage("akshan-lol-splash-art-hd-wallpaper-1920x1080-uhdpaper.com-718.1_a.jpg"),
    skins: [
      { name: "Default", image: getImage("akshan-lol-splash-art-hd-wallpaper-1920x1080-uhdpaper.com-718.1_a.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },
  {
    id: 5,
    name: "Alistar",
    image: getImage("alistar-lol-splash-art-uhdpaper.com-hd-365.jpg"),
    skins: [
      { name: "Default", image: getImage("alistar-lol-splash-art-uhdpaper.com-hd-365.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 6,
    name: "Ambessa",
    image: getImage("ambessa-lol-splash-art-hd-wallpaper-uhdpaper.com-560@2@b.jpg"),
    skins: [
      { name: "Default", image: getImage("ambessa-lol-splash-art-hd-wallpaper-uhdpaper.com-560@2@b.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 7,
    name: "Amumu",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 8,
    name: "Anivia",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 9,
    name: "Annie",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 10,
    name: "Aphelios",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 11,
    name: "Ashe",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 12,
    name: "Aurelion Sol",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 13,
    name: "Aurora",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 14,
    name: "Azir",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 15,
    name: "Bard",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 16,
    name: "Bel'veth",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 17,
    name: "Blitzcrank",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 18,
    name: "Brand",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 19,
    name: "Braum",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 20,
    name: "Briar",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },{
    id: 21,
    name: "Caitlyn",
    image: getImage("ahri.jpg"),
    skins: [
      { name: "Default", image: getImage("ahri_default.jpg") },
      { name: "Star Guardian", image: getImage("ahri_starguardian.jpg") },
      { name: "K/DA", image: getImage("ahri_kda.jpg") }
    ]
  },
  {
    id: 3,
    name: "Yasuo",
    image: getImage("yasuo.jpg"),
    skins: [
      { name: "Default", image: getImage("yasuo_default.jpg") },
      { name: "Nightbringer", image: getImage("yasuo_nightbringer.jpg") },
      { name: "Spirit Blossom", image: getImage("yasuo_spiritblossom.jpg") }
    ]
  }
];


champions.forEach((champ) => {
  console.log(`Champion: ${champ.name}`, champ.skins);
});



const ChampionList = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-6">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 relative text-white">
        Champions List
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>

      {/* Champions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {champions.map((champ) => (
          <Link
            to={`/champion/${champ.id}`}
            key={champ.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Image container */}
            <div className="w-full aspect-[1.1] overflow-hidden rounded-xl">
              <img
                src={champ.image}
                alt={champ.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>

            {/* Overlay with Champion Name */}
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4">
              <h2 className="text-lg md:text-xl font-bold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:bg-white/30">
                {champ.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};





const SkinImage = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImgSrc("/src/assets/placeholder.jpg")}
    />
  );
};


const ChampionDetail = () => {
  const { id } = useParams();
  const champion = champions.find((c) => c.id === parseInt(id));

  if (!champion || !champion.skins || champion.skins.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-2xl">
        No skins found for this champion!
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-200 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{champion.name} Skins</h1>

      {/* Swiper Container */}
      <div className="w-full max-w-[1000px] h-auto">
        <Swiper spaceBetween={20} slidesPerView={1} navigation={true} modules={[Navigation]}>
          {champion.skins.map((skin, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center gap-4 h-auto">
              {/* Image and Name Wrapper */}
              <div className="flex flex-col items-center">
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                  <SkinImage src={skin.image} alt={skin.name} />
                </div>
                <h2 className="text-xl font-bold mt-2">{skin.name}</h2>
              </div>

              {/* Download Button (Always Below Image & Name) */}
              <a 
                href={skin.image} 
                download={skin.name} 
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-purple-500 hover:to-blue-500"
              >
                Download
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChampionList />} />
        <Route path="/champion/:id" element={<ChampionDetail />} />
      </Routes>
    </Router>
  );
}