import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-[2.08vw]">
      <div
        className="
          w-[17.19vw]          /* 330px */
          h-[3.33vw]           /* 64px */
          bg-white
          rounded-[0.63vw]
          flex items-center justify-between
          px-[0.69vw]          /* 13.2px */
          py-[0.99vw]          /* 19px */
          border border-gray-200
          shadow-sm
        "
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/headerIcon.svg"
            alt="Garage Code"
            width={0}
            height={0}
            sizes="2vw"
            className="w-[1.67vw] h-auto"
            priority
          />
        </div>

        {/* Burger SVG */}
        <div className="flex items-center">
          <Image
            src="/openMenu.svg"
            alt="Menu"
            width={0}
            height={0}
            sizes="3vw"
            className="w-[3.13vw] h-auto"
          />
        </div>
      </div>
    </header>
  );
}
