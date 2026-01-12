import Image from "next/image";

type Props = {
  tag: string;
  title: React.ReactNode;
  duration: string;
  price: React.ReactNode;
  image: string;
};

export default function CourseCard({
  tag,
  title,
  duration,
  price,
  image,
}: Props) {
  return (
    <div className="relative bg-white rounded-[1.04vw] border border-[#DEE2E6] p-[1.25vw]">
      <span className="text-[0.52vw] text-[#868E96] border border-[#CED4DA] rounded-full px-[0.52vw] py-[0.21vw] inline-block mb-[0.8vw]">{tag}</span>
      <h3 className="text-[1.04vw] font-semibold text-[#1A1A1A] mb-[0.6vw]">{title}</h3>
      <div className="flex items-center text-[0.83vw] text-[#393939] mb-[0.6vw]">
        <svg className="mr-[0.26vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" width="15" height="15">
          <path d="M7.5 3.75V7.5L10 8.75" stroke="#868E96" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="#868E96" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {duration}
      </div>
      <p className="text-[1.04vw] font-semibold text-[#1A1A1A] mb-[1.04vw]">{price}</p>

      <div className="flex gap-[0.36vw] mb-[0.8vw]">
        <button className="flex-1 bg-[#207443] text-white rounded-full py-[0.6vw] text-[0.83vw]">Записаться</button>
        <button className="flex-1 border border-[#868E96] font-bold text-[#868E96] rounded-full py-[0.6vw] text-[0.83vw]">Подробнее</button>
      </div>

      <p className="text-[0.63vw] text-[#ADB5BD]">На этом курсе обучают делать сайты*</p>

      <Image src={image} alt="/" width={0} height={0} sizes="4vw" className="absolute top-[1.25vw] right-[1.25vw] w-[3.8vw] h-[3.8vw] opacity-80"/>
    </div>
  );
}
