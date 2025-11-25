import { useState } from "react";

const banners = [
  {
    title: "Estreia: O Mistério Lunar",
    image: "https://via.placeholder.com/700x300?text=Mistério+Lunar",
    subtitle: "Descobre o novo thriller disponível só na AnTPlay+!",
  },
  {
    title: "Original AnTPlay+: CodeHunter",
    image: "https://via.placeholder.com/700x300?text=CodeHunter+Original",
    subtitle: "Uma série exclusiva de ação e tecnologia!",
  },
  {
    title: "Super Kids",
    image: "https://via.placeholder.com/700x300?text=Super+Kids",
    subtitle: "Diversão para toda a família.",
  },
];

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  function prevBanner() {
    setIndex(index === 0 ? banners.length - 1 : index - 1);
  }
  function nextBanner() {
    setIndex(index === banners.length - 1 ? 0 : index + 1);
  }

  return (
    <div className="banner-carousel">
      <img src={banners[index].image} alt={banners[index].title} className="banner-img" />
      <div className="banner-details">
        <h2>{banners[index].title}</h2>
        <p>{banners[index].subtitle}</p>
      </div>
      <button className="banner-arrow left" onClick={prevBanner}>{"<"}</button>
      <button className="banner-arrow right" onClick={nextBanner}>{">"}</button>
    </div>
  );
}

export default BannerCarousel;
