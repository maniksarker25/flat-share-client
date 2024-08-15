import { Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { features } from "process";

const coreFeatures = [
  {
    id: 1,
    title: "Prime Location",
    description:
      "The core feature of any real estate property is its location. It could be in a prime area, which is crucial.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Modern Living",
    description:
      "Modern technology and integrated technology are key aspects of contemporary living spaces.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Eco-Friendly",
    description:
      "Features such as green spaces, energy-efficient appliances, and materials used in the building emphasize eco-friendliness.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Easy Accessibility",
    description:
      "Access to transportation hubs, schools, healthcare facilities, shopping centers, and venues is essential.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Security Features",
    description:
      "Features like gated access, security cameras, intercom systems, and surveillance cameras enhance safety.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Smart Home Technology",
    description:
      "In today’s digital age, properties with smart home features provide modern conveniences and enhanced control.",
    icon: (
      <svg
        style={{ stroke: "gray" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
];

const CoreFeatures = () => {
  return (
    <div className="bg-[#F0F6F8] py-28 mt-[100px]">
      <Container>
        <h1 className="text-center text-4xl font-semibold mb-12 ">
          Core feature facility
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures?.map((feature) => (
            <div className="bg-[#FFFFFF] p-6" key={feature?.id}>
              <div className="flex gap-6">
                <div>{feature?.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold mb-3">
                    {feature?.title}
                  </h2>
                  <p className="text-gray-500">{feature?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoreFeatures;
