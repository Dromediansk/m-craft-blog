import Link from "next/link";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { FC } from "react";
import { NavbarProps } from "sanity";

const StudioNavbar: FC<NavbarProps> = (props) => (
  <div>
    <div className="flex items-center justify-between p-5">
      <Link href="/" className="text-main flex items-center">
        <HiArrowUturnLeft className="h-6 w-6 text-main mr-2" />
        Go To Website
      </Link>
    </div>
    {props.renderDefault(props)}
  </div>
);

export default StudioNavbar;
