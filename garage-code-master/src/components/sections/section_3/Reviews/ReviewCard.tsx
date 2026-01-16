import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  role: string;
  text: string;
};

export default function ReviewCard({ avatar, name, role, text }: Props) {
  return (
    <div
      className="
        bg-white
        border border-[#DEE2E6]
        rounded-[1.04vw]
        p-[1.25vw]
        w-[16.7vw]
      "
    >
      {/* Header */}
      <div className="flex items-center mb-[0.83vw]">
        <Image
          src={avatar}
          alt={name}
          width={0}
          height={0}
          sizes="3vw"
          className="w-[2.6vw] h-[2.6vw] rounded-full mr-[0.78vw]"
        />
        <div>
          <p className="text-[0.94vw] font-semibold text-[#393939]">
            {name}
          </p>
          <p className="text-[0.73vw] text-[#ADB5BD]">
            {role}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className="text-[0.83vw] leading-[1.35vw] text-[#6C757D]">
        “{text}”
      </p>
    </div>
  );
}
