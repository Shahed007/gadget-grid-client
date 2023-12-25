import Container from "../../../components/container/Container";
import phone from "../../../assets/banner-image/banner-1.png";
import iosIcon from "../../../assets/icon/ios.png";

const TopProduct = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-5 dark:text-white">
          Top Product
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-0 gap-8 items-center">
        <div>
          <ul className="space-y-6 dark:text-white">
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Processor</h2>
                <h3 className="text-lg ">Latest A17 Bionic chip</h3>
              </div>
              <div className="basis-2/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                  />
                </svg>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Camera</h2>
                <p className="text-sm ">
                  <span className="text-black font-bold dark:text-white">Rear Camera:</span>
                  48MP main sensor, 12MP ultrawide sensor, and 12MP telephoto
                  sensor with 3x optical zoom.
                </p>
                <h3>
                  <span className="text-black font-bold dark:text-white">Front Camera::</span>
                  12MP TrueDepth camera with autofocus
                </h3>
              </div>
              <div className="basis-2/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Battery</h2>
                <p className="text-sm ">
                  4441mAh battery with fast charging support
                </p>
              </div>
              <div className="basis-2/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center dark:text-white">
          <img className="h-full w-full" src={phone} alt="" />
          <h4 className="text-2xl font-bold">iPhone 15 pro max</h4>
        </div>
        <div>
          <ul className="space-y-8 dark:text-white">
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Storage</h2>
                <h3 className="text-lg ">128GB, 256GB, 512GB, or 1TB</h3>
              </div>
              <div className="basis-2/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Operating System</h2>
                <h3 className="text-lg ">Latest: iOS 17</h3>
              </div>
              <div className="basis-2/12">
                <img className="h-10 w-10" src={iosIcon} alt="" />
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold ">Display</h2>
                <p className="text-sm ">
                  6.7-inch Super Retina XDR OLED display with 1290 x 2796 pixels
                  resolution, 120Hz refresh rate, HDR, and True Tone.
                </p>
              </div>
              <div className="basis-2/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TopProduct;
