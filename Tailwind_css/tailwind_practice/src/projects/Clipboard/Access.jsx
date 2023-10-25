import img_device from "../../assets/images/image-devices.png";

function Access() {
  return (
    <div className="max-w-6xl mx-auto text-center my-20 mx-auto md:mt-60 ">
      <h3 className="text-4xl font-bold mb-8 text-darkgrayishBlue md:text-5xl">
        A history of everything you copy
      </h3>
      <div className="text-grayishBlue mb-8 max-w-3xl mx-auto text-2xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </div>
      <img src={img_device} alt="device" className="mx-auto" />
    </div>
  );
}

export default Access;
