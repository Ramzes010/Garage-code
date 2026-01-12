import CourseCard from "./CourseCard";

const COURSES = [
  {
    tag: "ПРОФЕССИЯ",
    title: (<>Front-End<br />разработчик</>),
    duration: "6 месяцев",
    price:
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">10 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-1.png",
  },
  {
    tag: "КУРС",
    title: (<>HTML &<br />CSS</>),
    duration: "2 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">3 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-2.png",
  },
  {
    tag: "КУРС",
    title: (<>Разработка на<br />конструкторах</>),
    duration: "2 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">4 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-3.png",
  },
  {
    tag: "ПРОФЕССИЯ",
    title: (<>Back-end<br />разработчик</>),
    duration: "6 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">10 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-4.png",
  },
  {
    tag: "ПРОФЕССИЯ",
    title: (<>JavaScript<br />разработчик</>),
    duration: "4 месяцев",
    price:  
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">5 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-5.png",
  },
  {
    tag: "ПРОФЕССИЯ",
    title: (<>Python<br />разработчик</>),
    duration: "4 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">8 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-6.png",
  },
  {
    tag: "ПРОФЕССИЯ",
    title: (<>Графический<br />Дизайнер</>),
    duration: "3 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">19 999 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-7.png",
  },
  {
    tag: "ПРОФЕССИЯ",
    title: (<>UI-UX<br />Дизайнер</>),
    duration: "2 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">24 249 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-8.png",
  },
  {
    tag: "КУРС",
    title: (<>Дизайнер<br />Инфографики</>),
    duration: "4 месяцев",
    price: 
    (<>
      <span className="text-[1.35vw] font-bold text-[#393939]">4 599 ₽</span>
      <span className="text-[0.68vw] text-[#5D5D5D] ml-[0.26vw]">/месяц</span>
    </>),
    image: "/img/iconCard-9.png",
  },
];

export default function Courses() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="text-center mb-[3.13vw]">
        <h2 className="text-[2.34vw] font-semibold text-[#393939] font-semibold leading-[2.19vw] tracking-[-0.16vw] mb-[.14vw]">
          Каталог курсов
        </h2>
        <p className="text-[0.94vw] text-[#868E96] leading-[2.19vw]">
          Почти везде есть бесплатная часть
        </p>
      </div>
      <div
        className="w-full max-w-[69.6vw] grid grid-cols-3 gap-[0.52vw]">
        {COURSES.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}
