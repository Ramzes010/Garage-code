import FAQItem from "./FAQItem";

const QUESTIONS = [
  "Методика коротких и регулярных занятий, как это работает?",
  "Когда ждать результат?",
  "Как будет выглядеть расписание занятий?",
  "Как понять, сколько часов в месяц мне нужно?",
  "С какого возраста?",
  "Что нужно для занятий?",
  "Могу ли я получить скидку?",
];

export default function FAQ() {
  return (
    <section className="w-full flex flex-col items-center pb-[5vw]">
      
      <div className="w-full max-w-[69.6vw]">
        {QUESTIONS.map((q, i) => (
          <FAQItem key={i} question={q} />
        ))}
      </div>

    </section>
  );
}
