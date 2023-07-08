import Image from "next/image";
import FiltersContainer from "./components/FilterContainer";
import { FancyButton } from "./components/FancyButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FiltersContainer />
      <FancyButton
        text="Generate"
        iconSrc=""
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      />
    </main>
  );
}
