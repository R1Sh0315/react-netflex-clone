const TopTen = () => {
  return (
    <div className="topten-container">
      {topTenList.map(({ idx, number, url }) => (
        <div key={idx} className="topten-num-img">
          <h1 className="topten-number" >
            {number}
          </h1>
          <img className="topten-img" src={url} />
        </div>
      ))}
    </div>
  );
};

const topTenList = [
  {
    number: 1,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4EG8gAfxEsW0PysjasTCfTUaU9PjCQlDiOWy7ktJFIKhlxrzPwEE3Wz01YcOw-Oa-etGU5uwSvmzphgy61MQ94EtqE3zhZxv6ESzKgGUuKQ1IQS0R7RsOuGOXCR-EZug.webp?r=307",
  },
  {
    number: 2,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUciien70ANXXo3e2tQkTCWi-5kp1KLGweI8OWoCZ4oepGIza_TOWgqKLYTKPvJ246zlxqbfrqW_pYr3CDy2Wi6GNSU.webp?r=706",
  },
  {
    number: 3,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4-vpWHlBwwx-yIjHY6pRb9FYyiQ4-uq9g2k5Vd_O51hbIATwTIPhBeEbysMQEI4g28R1892cyailQrgQQxUV_BIeM.webp?r=5c4",
  },
  {
    number: 4,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT3pJslemH-ZYXnUq0duJNtHfwN69cjVGwxmunW5QDGDbZawtbeAde3_rE9a1co6r5mnaX0VLhH3xEFxP9R89bzUtKw.webp?r=516",
  },
  {
    number: 5,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ-h3OWvE30XnwlCJ1noPO6DEHosUYSG6CN8Fyx3zmW9Gma2URr03nD8phORSE0QvCBuyPTTU4nX7htAJhUswmaM8uA.webp?r=7de",
  },
  {
    number: 6,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJNJx7fUl-zbgs6c3VS4EzX6idVpy7MRUqYKBoS4CGjXkXdu-mkGoTcx-l00hs2ZLZW59WD7xCKqeaipBLO8kXbpUU.webp?r=f10",
  },
  {
    number: 7,
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e",
  },
  {
    number: 8,
    url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQiIBJXiMiiUS9zi_1pBO1NF-kBzmpZfw2IkNs_Uh6cWYQestVnV4Wy7vQDXdFHdoPjQp4JNFCySFpoU6yEeBSOh8JM5.webp?r=46a",
  },
  {
    number: 9,
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
  },
  {
    number: 10,
    url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
  },
];

export default TopTen;
