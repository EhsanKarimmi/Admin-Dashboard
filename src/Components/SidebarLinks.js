import { AiFillHome, AiFillGold } from "react-icons/ai";
import { BiBorderAll } from "react-icons/bi";
import { HiOutlineCurrencyYen, HiOutlineDocumentReport } from "react-icons/hi";
import { RiSpaceShipFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa";

export const sidebarLinks = [
    { icon: <AiFillHome />, href: "#", text: "Dashboard" },
    { icon: <BiBorderAll />, href: "#", text: "Vote" },
    { icon: <HiOutlineCurrencyYen />, href: "#", text: "XVS" },
    { icon: <FaChartArea />, href: "#", text: " Market" },
    { icon: <AiFillGold />, href: "#", text: " Vault" },
    {
        icon: <HiOutlineDocumentReport />,
        href: "#",
        text: "Transactions",
    },
    {
        icon: <RiSpaceShipFill />,
        href: "#",
        text: "XVS Prediction",
    },
    { icon: <BsFillPeopleFill />, href: "#", text: "Froum" },
];
