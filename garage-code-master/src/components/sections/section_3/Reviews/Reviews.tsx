import ReviewCard from "./ReviewCard";

const REVIEWS = [
  {
    avatar: "/img/review-1.jpg",
    name: "Аслан",
    role: "Front-End",
    text: "Моё первое впечатление о программировании было бы не самым лучшим, если бы не этот преподаватель.",
  },
  {
    avatar: "/img/review-2.jpg",
    name: "Дени",
    role: "Front-End",
    text: "Они внесли важный вклад в мое образование и развитие",
  },
  {
    avatar: "/img/review-3.jpg",
    name: "Асхаб",
    role: "Front-End",
    text: "Преподаватели оказались очень квалифицированными специалистами, всегда готовыми помочь и объяснить сложные моменты",
  },
  {
    avatar: "/img/review-4.jpg",
    name: "Дени",
    role: "Front-End",
    text: "Пройти эти курсы было лучшим решением в моей жизни",
  },
];

export default function Reviews() {
  return (
    <section className="w-full flex flex-col items-center py-[4.2vw]">
      
      <h2 className="text-[2.34vw] font-semibold text-[#393939] mb-[2.6vw]">
        Отзывы
      </h2>

      {/* Cards */}
      <div
        className="
          w-full
          max-w-[69.6vw]
          flex
          justify-between
        "
      >
        {REVIEWS.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>

    </section>
  );
}
