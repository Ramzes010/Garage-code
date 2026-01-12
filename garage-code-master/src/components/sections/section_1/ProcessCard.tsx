import Image from "next/image";

type Props = {
  title: React.ReactNode;
  text: string;
  image: string;
};

export default function ProcessCard({ title, text, image }: Props) {
  return (
    <div className="bg-white rounded-[1.04vw] border border-[#DEE2E6] p-[1.56vw] flex justify-between items-center">
      <div className="max-w-[28vw]">
        <h3 className="text-[1.04vw] font-semibold text-[#252733] mb-[0.6vw] leading-[1.3vw]">
          {title}
        </h3>
        <p className="text-[0.68vw] leading-[0.94vw] text-[#252733]">
          {text}
        </p>
      </div>

      <Image src={image} alt="/" width={0} height={0} sizes="10vw" className="w-[8.3vw] h-auto"/>
    </div>
  );
}
