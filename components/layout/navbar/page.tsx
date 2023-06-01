import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { SubHeaderItem } from "@/types";
import Container from "@/components/container/page";

export default function page() {
  return (
    <div className=" bg-black md:py-[6px] py-1">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center">
          <div className="flex">
            <div className="flex">
              {SubHeaderItem.map((data) => (
                <ul className="flex" key={data.id}>
                  <li className="flex">
                    <Link
                      className="lg:mr-4 md:mr-3 mr-2 text-white md:text-base sm:text-sm text-xs"
                      href="/about"
                    >
                      {data.label}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex item-center md:mt-0 mt-1 md:mr-0 mr-2">
              <span className="text-white lg:mr-10 md:mr-8 mr-2 md:text-base sm:text-sm text-xs">
                FREE SHIPPING OVER $50
              </span>
            </div>
            <ul className="flex">
              <li className="lg:mr-6 md:mr-4 mr-2">
                <Link href="" className="text-white">
                  <FaFacebook />
                </Link>
              </li>
              <li className="lg:mr-6 md:mr-4 mr-2">
                <Link href="" className="text-white">
                  <FaInstagram />
                </Link>
              </li>
              <li className="lg:mr-6 md:mr-4 mr-2">
                <Link href="" className="text-white">
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

// const NAV_ITEMS = [
const SubHeaderItem = [
  {
    id: 1,
    label: "Home",
    href: "#",
  },
  {
    id: 2,
    label: "Faqs",
    href: "#",
  },
  {
    id: 3,
    label: "Privacy",
    href: "#",
  },
  {
    id: 4,
    label: "Track your order",
    href: "#",
  },
];
