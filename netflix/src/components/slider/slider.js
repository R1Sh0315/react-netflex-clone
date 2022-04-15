import "../../App.css";

const SiliderComponent = () => {
  return (
    <>
      <div className="">
        {CarouselImg.map(({ idx, title, imgUrl }) => (
          <div className="" key={idx}>
            <h3 style={{ color: "white" }} className="slider-title">
              {title}
            </h3>
            <div className="slider-container">
              {imgUrl.map(({ idx, url }) => (
                <img key={idx} className="slider-img" src={url} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const CarouselImg = [
  {
    title: "Trending Now",
    imgUrl: [
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
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUCVKK3J7gy1HHDm511aRxOZAeH_SsCiZgdUcK6Cl3JPJTfxcu_Uf2euVK2GxwWlkr_PP_f3aJJudZleDt4kedzHkejC.webp?r=b3c",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
    ],
  },
  {
    title: "English Movies",
    imgUrl: [
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfG_3F7-1GGQUNhQX4R9yk8QG2GWQQLMqFKOHl_wjdLGlKz6FLYVAx6hTmJjkS3thgulgdzWaJgtJpNXsb4Sv0nSiuU.webp?r=78c",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXb08VwTotwOWp8q8VYIh7uaFwQfWkN2GyQ8ww3omNk-CPxq3wJmKIAkL-HfyrAEH2kbkHfwedVVMBgTR7pb_McuOR0.webp?r=7e4",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWA8OKkpi3U2vypL4IyDCRoJT04NfOkMR8-5K1sOgjA94Dx9rvO8IQmuuzzbWWBd6UIh5H73IF5K5wcGXSat2Ud08vQ.webp?r=84d",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVDfUTQP0eyauCRX2ziIphD6YJg4QCxEiaBzQ7_7eW9uIVKQQSK1_TbzQcG7Jc9GhLoxjnE3LbuJiJ0Dm4KjfQJ8HIY.webp?r=ff8",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa2diFX3JMaCqyKNcNjovfbH90orBBS3qY2_OnlSFhZPx_4mYLasIM3PZGOtsdkjnQw-v0wd3nUGk0-ONyOCdEEGXY4.webp?r=f52",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe5dMpYuyDlGeeXDxLHV_DsiM-xNITI8qhqm_Wm555Dmq-JfCT_Z_sM6_I8CScd3e3LV_kZr5GRP2Bi_oyOIqc6zDCo.webp?r=5bc",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWRaVGLruVZMnzlMSMamK_7h78FB_6Aar5HBeQ6a8MPaYGdoPWj86GHazMozW9HYJHOkfY5s1MRJScHe__cscKn8vJc.webp?r=cd9",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVH-bMWTsihdtRbxBzSmfsXMeVybqFYeea1LsfnpveNXGOvF8INrqDxJmPXDi80skgBhKMWt-luQMQZkw0qgt0ygeQ.webp?r=333",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYe_T43SiBtvNxjq6D-4LGtOpKEZsUgr_gE136eJe6PQVqEkYWjy0II2vcN9YXoxcEy7wv_hcC_Oz678FCnoi5XxM84.webp?r=118",
      },
    ],
  },
  {
    title: "International Movies",
    imgUrl: [
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
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUCVKK3J7gy1HHDm511aRxOZAeH_SsCiZgdUcK6Cl3JPJTfxcu_Uf2euVK2GxwWlkr_PP_f3aJJudZleDt4kedzHkejC.webp?r=b3c",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
    ],
  },
  {
    title: "Anime",
    imgUrl: [
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABertMd3kJwUZGuOMoJKrabAz_NgCLm5wpB2Uepw2_RrQJfBJqBIqZ7Y8fXNl7_mJdB0SG5I_jOBRaOOFpv7jtTJ5-PM.webp?r=fe6",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXlPXaf3w4ydlD5GzrDw3A9pp1w9xe767tdukAM3Ueev1CExJUAltqkYjjFI3PjNDOoHGX2fFTiysKm3nAAjpS-6MSg.webp?r=05b",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYrwQZBRIGLQZ6cS1NbnSoItYAscSfzcvRFucQmesnZZJmhts-3uVkVzZQHVbKfjaMaqNBtER2VehgP4jJeP9LbMXV8.webp?r=bc9",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVY_o5s9f4n7uOYXczudv6SdJEcffmjkUxkZczuanuLbRSZiFQAh-MOFlbkG5-skTN3jMsaUnbx0a5ctdT_8DXGs6bYw-dKG8q3wy0Y-vnu8WtJ8MegZNH8kyZ9r.jpg?r=058",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZP0EgJfp8yfv8sLnJ3eb0s6W5KhikgtEHY_YWxtreizxpPj3Le6VW1YkRHq1-RukxvZzfiDh9QFQccol0VyWO2YF1o.webp?r=306",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUh2VSw3MqMQv5Rby_7FM8VwFS8ShaAD-MsQwzLH8nAvW919NWS3JKJmiX3HzoaK5zOum_P8Fpt5NEHjdibyXP5zfyj6KgyHOPiQDw2V6M3khN5rmd4CzZH29Fkr.jpg?r=51a",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd5CsHSNKUyr9zXNoH47Y6CDpBNRLYSXpJ4Vo_jd7pGdFUrTFljsRvDWAezZTipUUr5k34qJLqsVsYQ3DEE4RqywE50cKIfTVPt9nAVIyxY7NNREAjf2hcbiRSDf.jpg?r=ac1",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRni4-Pia56UIvhloKeymADXZcBJXgsWDMSyf88q3bAsLiXOjlBL1gYe_4AZKFPhNHZ8JdlVCJ5qPrn5E7YPAhb34Z4HnJpblGrqrfgg5VfXJkHDAoU3G_AehVMO.jpg?r=f0d",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaWZjjlhVPhhMWEcEPIJxWvo5apV3D8EiZZZp95ANeTYtQCWD401tu7BKn8Fk1uJ_iiT_6ZynRZbuHK9-nloB9CuDNc.webp?r=6f5",
      },
    ],
  },
  {
    title: "Comedies",
    imgUrl: [
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
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUCVKK3J7gy1HHDm511aRxOZAeH_SsCiZgdUcK6Cl3JPJTfxcu_Uf2euVK2GxwWlkr_PP_f3aJJudZleDt4kedzHkejC.webp?r=b3c",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQloonmdADCnLlwCetj9Tg1V5v0cmmqW4jzK7o5ADhKMVpRSTy9NY4qDfc16Wegj1J_4BWxSs9e9trYq8froejUkwUW5.webp?r=f4e",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf5vCo9fOPF8r34ZOxT75AxVyClYK3wlsJ7_HzWqUfLoNWO9VcIat38ce5CSa4aWvdBoEXbRPWkfMI9yql1RWlWvvbfW.webp?r=d64",
      },
    ],
  },
  {
    title: "East Asian Supernatural TV Shows",
    imgUrl: [
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf4EG8gAfxEsW0PysjasTCfTUaU9PjCQlDiOWy7ktJFIKhlxrzPwEE3Wz01YcOw-Oa-etGU5uwSvmzphgy61MQ94EtqE3zhZxv6ESzKgGUuKQ1IQS0R7RsOuGOXCR-EZug.webp?r=307",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd5CsHSNKUyr9zXNoH47Y6CDpBNRLYSXpJ4Vo_jd7pGdFUrTFljsRvDWAezZTipUUr5k34qJLqsVsYQ3DEE4RqywE50cKIfTVPt9nAVIyxY7NNREAjf2hcbiRSDf.jpg?r=ac1",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUciien70ANXXo3e2tQkTCWi-5kp1KLGweI8OWoCZ4oepGIza_TOWgqKLYTKPvJ246zlxqbfrqW_pYr3CDy2Wi6GNSU.webp?r=706",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUqVmmQK_xB06R98Rgip1EecdzWlq3Aiy78Az_koP3WnDAXZuQbbuWpgv8HjKZu8r5KYXUpbEVzTay6sJLbyZnNYYC-dE9q5JThgsPtx-o4WvJ4kgBJRRQCNZW10.jpg?r=033",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVcq0mVFMPt_T7L3oc_TuETUCE2Qe3WfexMzIHBUEq-cta6roQvHAffoPu31QiKcSyEhJSjE4Tiry15b8WFVKZRYmiY.webp?r=a04",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABejVHKqXFTflxcugCUpkDzfZSwtbvv2jFapP6SnA1mh23YV6mRysN80O31x3g1qD34xWhE3ix-iKMKiPRIfLs7xD5qY.webp?r=c98",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRDvYRS1wv11HdxU-QNZJ5ZLwjDN427R7099lHNfOochG4BkLyKsSCvKiVtWPRfJnnyComQHtNP4mKabG8xkzngWcv7mrwgqYOtsZxuh14h2X2W5f1-vbrsFF57y.jpg?r=588",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZZpfOI6xNt6xsRfrrp4-S3DWUXUAB41enWKFlBpmlZ3aBTxKjhm1x_at3h6m3ZX6tCwM91fGq6dBY2YW_6SvJ7W08.webp?r=ea9",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUa72Et-HmnlhuEyc3N_ci65M3MxaQacPbVZtQRPrODji8BUS26J_j7B_RykIh-OYIsP8ZbQwBY4nKRgFZuhFRdvnmc.webp?r=089",
      },
    ],
  },
  {
    title: "Action Sci-fi",
    imgUrl: [
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe5dMpYuyDlGeeXDxLHV_DsiM-xNITI8qhqm_Wm555Dmq-JfCT_Z_sM6_I8CScd3e3LV_kZr5GRP2Bi_oyOIqc6zDCo.webp?r=5bc",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4-vpWHlBwwx-yIjHY6pRb9FYyiQ4-uq9g2k5Vd_O51hbIATwTIPhBeEbysMQEI4g28R1892cyailQrgQQxUV_BIeM.webp?r=5c4",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaPaIt9Yo48knSg5d_foabP0B1zoW-jMUB9BqPCgVhdsFtKyR0R-2tKxCyDk1eLjO5z2488Dne5-NXM13jt5Wzg1SE4.webp?r=a88",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXil26sjyQ3ks1EjPAdD_MPTphp5wTidi_5UyRUd2_FYtY7M59dFVLnrauiquFCJlXkeinVEtcvbdRfQk-tC_Lw8x5w.webp?r=8b8",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT3pJslemH-ZYXnUq0duJNtHfwN69cjVGwxmunW5QDGDbZawtbeAde3_rE9a1co6r5mnaX0VLhH3xEFxP9R89bzUtKw.webp?r=516",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUbg6d6EkcIOkmnn3lYUlADHnA2PjSmYNYmPSZMKTtXnUWxAyQdvSj2M-1mHMBiKTxvOdrRlRuzQ3CQWL_fk4eVhMO4.webp?r=f59",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ05Rn04LV-ViyPkKNpD2xaRB1GUfMLh-eyiBBy1BbdBqewnf3kDxxyhI1My-7508LkERe3VJ4xSEjuBuGCL7YEEeZo.webp?r=aac",
      },
      {
        url: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXEBebnU8oL0Sb6ZRrM9p5jTIRtin5eP6uOuSGtRBQ7SdEoLAYvHcjf6qPJFLAH6K3SQ5RPljOXgGkCbp_9LcSjzsEp1.webp?r=308",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS76S7nuoPJf5VyeEQkrwt3hMJz0VvO56ehiXjDKVE4CN8A6Uxlp0x_7oUQF4imRlgaJy4UvCuXkTSwyakYeq-CfxUw.webp?r=569",
      },
    ],
  },
  {
    title: "Horror Movies",
    imgUrl: [
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcmOBJAy7RRriGh3JynUv-EmhjwqAeqdu5IK_lswhJMxQ7jnYfXvnp55u2zvhHKp_j0qKkZUkiATE5Bc7xB4kfBSKtR9.webp?r=814",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZafC9qdIprm8LAs4LFPg-PnLRuG9Hh1ngHEqzZvqbaK4O70zv-wK6C1ROx5BhtP_xnWpnpxQg0zpWVPn3gTMd7ZBhk.webp?r=8c8",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb1F3SzPj9-IdRFjOr5_4AAAcfRjo5NCdAm1MKM45A-odEeT5_PzC-XtOrggc8JArJEzpHk0lQknwoTAAFd7ZFpcPE4.webp?r=7fc",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ-h3OWvE30XnwlCJ1noPO6DEHosUYSG6CN8Fyx3zmW9Gma2URr03nD8phORSE0QvCBuyPTTU4nX7htAJhUswmaM8uA.webp?r=7de",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmIKTGu3mugmZfNo29FyVt0j2kAjnp4GPiMoEKp-W9lMUUy2AL2ijcuvs2vHCE8ZEIFMyG9E5-ttHA6sZsGiGE2FNQ.webp?r=4d1",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTbDuxO6NM0V5iihkmbG6mbp51QQ2dxzx1XvzF7MrKbBi0dz7aMM8FfGVyClutA5wToj0tr8jXD5jnURgKUWwLu95ig.webp?r=ea9",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZYRT77Hxrnf_acImxCTwmpTyBNl9wd4fv4Em-faujitzQj9SKCFeFskgNGopNKDxtCLhxLzL6xj-Lennor_SCRGX0lFD-McPO5Kwk-eWiAvs4fpEbA0hTIc8xt4.jpg?r=cba",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQYAHxHbTc6aO_LHhwu1JseTjtJc4M0qAZvGyO5zQorF8tlv4AU7pbjj7P5aiTNYSJrR_3QyQHU1qf-J2AE98mWELJM.webp?r=f8e",
      },
      {
        url: "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJNJx7fUl-zbgs6c3VS4EzX6idVpy7MRUqYKBoS4CGjXkXdu-mkGoTcx-l00hs2ZLZW59WD7xCKqeaipBLO8kXbpUU.webp?r=f10",
      },
    ],
  },
];

export default SiliderComponent;
