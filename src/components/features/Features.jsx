import React from "react";
import Beat from "./Beat";
import Video from "./Video";

const Features = () => {
  return (
    <div className="w-full ">
      <div className="Feature_Wrapper max-w-7xl mx-auto px-5 sm:px-16 my-20">
        <div
          className=" mb-20 sm:max-w-3xl sm:px-3 mx-auto text-center"
          id="feature_heading"
        >
          <h1 className="sm:text-3xl text-2xl">THE CORE FEATURES</h1>
          <p className="my-4">
            Capitalise on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps.
          </p>
        </div>

        <div id="feature_1" className="lg:flex ">
          {/* ///// BUILT-IN MIC ////// */}
          <div className="mr-0 lg:mr-5 lg:w-64  ">
            <div className="MicCard text-center flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">BUILT-IN MIC</h1>
              <p>
                Duis fermentum, purus vitae semper sollicitudin, lorem risus
                pretium nisl, consequat.
              </p>
            </div>

            {/*///////// ON-EAR CONTROLS /////////*/}

            <div className="MicCard text-center flex flex-col items-center my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">ON-EAR CONTROLS</h1>
              <p>
                Ut mattis rutrum enim, vel cursus turpis ullamcorper nec. Sed a
                sodales metus.
              </p>
            </div>

            {/* /////////// CLASS 1 BLUETOOTH ////////////// */}
            <div className="MicCard text-center flex flex-col items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">CLASS 1 BLUETOOTH</h1>
              <p>
                Etiam sit amet diam ac neque facilisis efficitur et ut sapien,
                ut a eros nec sapien.
              </p>
            </div>
          </div>

          <div className="CenterFlex my-8 lg:my-0 max-w-xl mx-auto lg:flex-1 ">
            <img src="./assets/images/017-thumbs.png" alt="IMG" />
          </div>

          {/*/////////// AWARD-WINNING SOUND ////////////// */}
          <div className=" lg:ml-5 lg:w-64 ">
            <div className="MicCard text-center flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">AWARD-WINNING SOUND</h1>
              <p>
                Aliquam sed risus enim. Donec nisl felis, fermentum eget dolor
                nec, volutpat pharetra.
              </p>
            </div>

            {/*////////////// 40 HOURS OF BATTERY LIFE ////////// */}

            <div className="MicCard text-center flex flex-col items-center my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">40 HOURS OF BATTERY LIFE</h1>
              <p>
                Aliquam sed risus enim. Donec nisl felis, fermentum eget dolor
                nec, volutpat pharetra.
              </p>
            </div>

            {/*////// FAST FUEL ///// */}
            <div className="MicCard text-center flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="my-3">FAST FUEL</h1>
              <p>
                Aliquam sed risus enim. Donec nisl felis, fermentum eget dolor
                nec, volutpat pharetra.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Video />
      <Beat />
    </div>
  );
};

export default Features;
