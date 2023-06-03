import React, { useEffect, useRef, useState } from "react";
import "./HomePageVideoContainer.css";

function HomePageVideoContainer(props) {
  const videoRef = useRef();
  const [videoOpacity, setVideoOpacity] = useState(10);

  // On Scroll Effect Video Pause and Opacity Drop
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const distance = 450;
  //     const windowY = window.scrollY;
  //     const newOpacity = 1 - windowY / distance;
  //     setVideoOpacity(newOpacity >= 0 ? newOpacity : 0);
  //     if (windowY < distance) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{ opacity: videoOpacity }}
      className=" HomePageVideoContainer-div "
    >
      <div className="groundGraidiant"></div>
      {/* <video
        ref={videoRef}
        src={
          "https://ff6922ccf3a3ebc647b392a9bbe3b2ac179721c32983d5fb8b90151-apidata.googleusercontent.com/download/storage/v1/b/staging.tumi-asbe-bolei-99b5a.appspot.com/o/myvideo.mp4?jk=ARTXCFHnCpo-iPkH41G0fDJNqS7m17-H02I1NRUJpHNExepRRcAyf8ieM4PoDgBpcPs_2EWdW7cAk3RcUe7sJn_9910YHMn_miUjiAbukqp_-Hz-A1MxycOGjJzHXdw52HHsVIL6DlVOuIChyT8lh_5mUuWJx38wmMeo7Xv4RQrJqb-IFF4iv6CvgdlFK2jp-sJP1L6wE0NzUB93RMUrOiQSx0cawm_xac9jmvOANQnEgm0OoLnTpuvTUcppKBX405ZodhXKIug-U6RtSH3IT0tHhoVCOjdopegdIT2pTmxYpcC_llLlOU1pIdR31EWpN94fxuYn6c7OayrhqoMgY0COt8FZxB5KLSuLi1pLUBu73QWu3Mj5pYebQ0yR2K5WYGWK9iG_LA0IJIbF1M-JDoPYPDvjc8NshlaTT8WyRmZlZ6jpLAG78XQuLB8qKO2ZOS2gujuwD9cj92lSZMbWt5O6WRQsV5RsIsQFuzFGAmJUqBD6f7qM-hFdn9oUqV8vuZ0b9I5OhICXaqXhkivMcQKI-w5G-gLH_m_nF5dzDbkrjGh7xrCB4GLm7aClQg7PcICvOgwM-Rc-gyZdS5lblJNqHE0lUzsTSxZNKe8fObeOtmD4oD8rf0E_ekhlbcVAaT85syUQOkG7kAPp6veWLZi8Ya8iPggtsbVARrTkKF4Rcc2XhPpH0x7tMbQ0OxC3plyIiiq3EiX5qfwz7iABaFsE7NzIDdrCXnp49MsSO2y6FCA_MCzEfvzbuRXICOh_YbO6z6vBcxm40HKy2hGcdBMHVN7p5-RTivwtPlQu4uqNUxZIuPl_OB_HTY2XeFpt0P16FhFFysOA_YjcQUQXlIGVZ_ElOWn-wr0d5JKbAlHzsQc2NYssypB8O7nTsKY2eCycblyqNS7vE8BWJusew8sBsDqnKCWx8TnwKOKNlMywgn_10Bb8dZA3i8canrt0HLbvq99e0NAjHD87rRBOjQFnePWORJCKmPQ2OMi8BaCj65cEXd3AYe4bFAJR3OlfCdCrEGtWsaG5IIuUe4AK7LKS3BIlkEcUpGMuc4ho0-bLc4rcwB5MqXo2SRCPY-OiK8s6j25BCIRZYRdVPRsOq3ZPsMDYwzFtu52ybYXKKmoRz0eXFn3gSrgSvEkMAqLffM6Xz0M_WzB070eE4en8reeLSNgxcNpsxE1IFDHf57CO8L1U2V7-rH3gz-Gl8L1DBIFQ3HJKeBYK_gmBsHjqvjsBG1grGQ&isca=1"
        }
        autoPlay
        muted
        loop
      ></video> */}
    </div>
  );
}

export default HomePageVideoContainer;
