import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import PartsOfSpeechBeginner from "../../components/PartsOfSpeechBeginner";
import DPartsOfSpeech from "../DegreeItems/DPartsOfSpeech";
import { PartsOfSpeechAdvanced } from "../../components/PartsOfSpeechAdvanced";

function PartsOfSpeech() {
  const data = [
    {
      label: "Beginner",
      value: "beginner",
      icon: Square3Stack3DIcon,
      desc: <PartsOfSpeechBeginner />,
    },
    {
      label: "Short ",
      value: "short",
      icon: UserCircleIcon,
      desc: <DPartsOfSpeech />,
    },
    {
      label: "Advanced",
      value: "advanced",
      icon: Cog6ToothIcon,
      desc: <PartsOfSpeechAdvanced />,
    },
  ];
  return (
    <div className="w-[95%] h-full">
      <div className="text-center py-28">
        <h1 className="">Parts of Speech</h1>
      </div>

      <div className="px-3 ">
        <Tabs value="beginner">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="text-gray-400 dark:text-gray-300">{desc}</div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default PartsOfSpeech;
