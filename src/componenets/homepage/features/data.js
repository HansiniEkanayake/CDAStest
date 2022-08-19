import {FaAccessibleIcon, FaGg} from "react-icons/fa";
import {SiDatabricks} from "react-icons/si";
import {MdConnectWithoutContact} from "react-icons/md";

export const featureList = [

    {
        id: 1,
        icon: <FaAccessibleIcon color="#0a1930" size={22} />,
        heading: "Can connet with all",
        text: "FarmCare is a best online platform to connect all agricultural and reseaarch production managers in country.",
      },
      {
        id: 2,
        icon: <SiDatabricks color="#0a1930" size={22} />,
        heading: "get alert",
        text: "FarmCare have ability to predict risky crops for a new disease ASAP.Then farmers can pre ready for that disease before it become huge disaster.",
      },
      {
        id: 3,
        icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
        heading: "control new diseases",
        text: "FarmCare gives methods to prevent newly arise diseases and farmers can protect their yeild.",
      },
      {
        id: 4,
        icon: <FaGg color="#0a1930" size={22} />,
        heading: "keep history",
        text: "FarmCare keeping the details about previouse disease, can get the details about it any time.",
      },
]