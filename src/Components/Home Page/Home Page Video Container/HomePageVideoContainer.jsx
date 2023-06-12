import React, { useEffect, useRef, useState } from "react";
import "./HomePageVideoContainer.css";

function HomePageVideoContainer(props) {
  const videoRef = useRef();
  const [videoOpacity, setVideoOpacity] = useState(10);

  // On Scroll Effect Video Pause and Opacity Drop
  useEffect(() => {
    const handleScroll = () => {
      const distance = 450;
      const windowY = window.scrollY;
      const newOpacity = 1 - windowY / distance;
      setVideoOpacity(newOpacity >= 0 ? newOpacity : 0);
      if (windowY < distance) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ opacity: videoOpacity }}
      className=" HomePageVideoContainer-div "
    >
      <div className="groundGraidiant"></div>
      <video
        ref={videoRef}
        src={
          "https://ff318bc3f96503c500e3630c6169cdc1b3a523553a0d9d12896581c-apidata.googleusercontent.com/download/storage/v1/b/staging.tumi-asbe-bolei-99b5a.appspot.com/o/myvideo.mp4?jk=ARTXCFFqNRgO0uZnbN9KV1yJ2MSdRBENlsPBmP2jYN3C1IoU-TbHALzxWCIan6kfts8HfOdAHPiB5HsTUlV5pEHj-hENpKRllNNswi3F9a5KGD0LFDQ5dDkcrN_dRVOKmxxKzNZCdcliP7S9Jk5LeQo4VzvPQKrt0gKK1Fg2MITgwEkj36QiJ3KfAxrGWUYULSLGUxafjODHVwDXiP0mzePlEQj040bRhvT9hfH7L6EMRmEzu0KOi1U17BeM-bzhm4PnqtzZu_kDuFk7f4NDrikO2AZ2n9RPQCTt4n-DBm0PCh7dm38Czr7YHT62gEzjT32iXUhGj_mlRYGcIBIs5m67t51mXjthhuhDeZJKbMWKRKRGQrM5I1Nwc4zq6DYmSDd_dR12_XPUbV2DR7E0ZPGcV7C6OgPmmPHY6Q8Hyq1f_BE_KQZ-YDqRKUU4D0pYacEcp1Rr1fVIghacQnJ9zUQ7l3-aDGl4Jw_OHtpIOuClbxQ3ykWwabZtBnoweNRKpgInFA1LxDQBKsfJ1OkoBuQ1XyPUuQ7TFwQF-zmZBTGLKjwyTeZXjaiOS0ejXYiLhrBBo1h_7cGrIQPWQpvveJxvv-qRShEPMOTkkzD7tq2gyXuA4-Ud_SYkTjXov5sdKc_RUnGO7gwf5NeZcYiq4TKbArl-iUgqB6ZKtxWkddy5XNKKNgwTdNp6yiSsHUcULGC4U25gBm9bfYIZ37I-Er4qPy5_BaLPuOAJGjZyAjnyiB9k3_sE0OTSmfgQlW3sWuBmiAhxpskEYFX9Xk-6eiJVkKM3cWondxeCtxaLI6T-QZcwHiJfIZsDaaniVXuJWJqYnbRxxX9cgizBL5LqdDNUdnHgLRLEU080ycx_upFBLgR4yQSrmMT-mtZdf8YNfNuok9KoxT0Llli7v5KRgdKF1YvniKkzKg76LT8KPpKzWxSi64p8s8YiKggimiq5T5LGBGNVn7IjgRjF-YOAWGJ9ZiGv6XU-4yM5JQZxdhkH1aCBUJqXhSfqzWipHOSi34iDfU2cPn4cy9KIuVcDmiubgErtszlu8xIPxfZJ_jX1haFq4mROXaJs7gvLO9ZOSU0sO7EASf60WYJb-7e-rJV380bLdYYXUEDR6mW2vKuJFPyICfYm1UGrUtWE3gpeWgb-fWqZqVgGANRfEB9apTDFaNLwx60aWqHaeZ0Qy6biGQw_BHmpGmOwua5GY4hl7Ulyyp6VcvWYi-etGWdU_mNwHD--xA&isca=1"
        }
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default HomePageVideoContainer;
