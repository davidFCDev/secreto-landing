import React from "react";

interface ArrowRightProps {
  width: number;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ width = 18 }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.0094L9.19239 5.81704L6.36393 2.98858L9.19236 0.160156L12.0208 2.98858L14.8492 0.160186L17.6778 2.9887L14.8492 5.81701L17.6776 8.64544L14.8492 11.4739L12.0208 8.64546L2.82852 17.8379L0 15.0094Z"
        fill="currentColor"
      ></path>
      <path
        d="M3.5355 0.160156L6.36393 2.98858L3.5355 5.81701L0.707077 2.98858L3.5355 0.160156Z"
        fill="currentColor"
      ></path>
      <path
        d="M12.0207 14.3022L14.8492 11.4739L17.6774 14.3024L14.8492 17.1307L12.0207 14.3022Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ArrowRight;
