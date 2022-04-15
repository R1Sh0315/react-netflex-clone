import SimpleImageSlider from "react-simple-image-slider";

const CarouselComponent = () => {
  console.log(document.getElementsByClassName('sliderList')[0]);
  return (
    <div className="sliderList">
      <SimpleImageSlider
        width={window.innerWidth}
        height={504}
        images={CarouselImg}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
const CarouselImg = [
  {
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQiIBJXiMiiUS9zi_1pBO1NF-kBzmpZfw2IkNs_Uh6cWYQestVnV4Wy7vQDXdFHdoPjQp4JNFCySFpoU6yEeBSOh8JM5.webp?r=46a",
  },
  {
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEqJ0L2WF_dUwDRX4CSiNbqTgiZueidRzqaWKm9kipgmhWP5QOxZO7gWwSdJnA948NwRKxFy49nBFm_Gm244lQqcdY.webp?r=88a",
  },
  {
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e",
  },
  {
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308",
  },
  {
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLyk7XmehXXR6vYZAIV1KrMgOSeA8TS4c7pIf-39Tg3XLLEloEfgx9y67INSYk27UplTUeQ5B1xMmlrPeahaPv8Ix6Q.webp?r=a1b",
  },
  {
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUCVKK3J7gy1HHDm511aRxOZAeH_SsCiZgdUcK6Cl3JPJTfxcu_Uf2euVK2GxwWlkr_PP_f3aJJudZleDt4kedzHkejC.webp?r=b3c",
  },
];

//   const CarouselImg = [
//     { title: "Joker", url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQiIBJXiMiiUS9zi_1pBO1NF-kBzmpZfw2IkNs_Uh6cWYQestVnV4Wy7vQDXdFHdoPjQp4JNFCySFpoU6yEeBSOh8JM5.webp?r=46a" },
//     { title: "The Originals",url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEqJ0L2WF_dUwDRX4CSiNbqTgiZueidRzqaWKm9kipgmhWP5QOxZO7gWwSdJnA948NwRKxFy49nBFm_Gm244lQqcdY.webp?r=88a" },
//     { title: "Bahubali", url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e" },
//     { title: "The Equalizer", url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308" },
//     { title: "Berserk", url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLyk7XmehXXR6vYZAIV1KrMgOSeA8TS4c7pIf-39Tg3XLLEloEfgx9y67INSYk27UplTUeQ5B1xMmlrPeahaPv8Ix6Q.webp?r=a1b" },
//     { title: "Stree", url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUCVKK3J7gy1HHDm511aRxOZAeH_SsCiZgdUcK6Cl3JPJTfxcu_Uf2euVK2GxwWlkr_PP_f3aJJudZleDt4kedzHkejC.webp?r=b3c" },
//   ];

const getClass = document.querySelectorAll("SimpleImageSlider");

export default CarouselComponent;
