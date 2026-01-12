import ProcessCard from "./ProcessCard";

export default function Process() {
  return (
    <section className="w-full flex flex-col items-center py-[4.2vw]">
      
      <h2 className="mb-[3.1vw] text-[2.34vw] font-semibold text-[#393939] leading-[2.23vw] tracking-[-0.16vw]">Наш процесс обучения:</h2>
      <div className="w-full max-w-[69.6vw] grid grid-cols-2 gap-[0.52vw]">
        <ProcessCard
          title={<>Онлайн-занятия<br />с преподавателем</>}
          text="Постоянный контакт с преподавателем, возможность ошибаться и задавать столько вопросов, сколько нужно. Мы будем рядом"
          image="/img/imgCard-1.png"
        />

        <ProcessCard
          title={<>Куратор<br />и обратная связь</>}
          text="Освобождаем пространство урока только для важного. В конце каждого месяца рассказываем о результатах и возможностях"
          image="/img/imgCard-2.png"
        />

        <ProcessCard
          title={<>2 занятия в неделю <br />по 90 минут</>}
          text="Обучаем предмету через формат bite-sized learning. Короткие, но ежедневные уроки помогают ученику не уставать и закрепить знания"
          image="/img/imgCard-3.png"
        />

        <ProcessCard
          title={<>Уроки и материалы <br />на платформе</>}
          text="Интерактивные задания во время уроков и после них. Все нужные материалы подготовлены преподавателем, исходя из программы обучения"
          image="/img/imgCard-4.png"
        />
      </div>
    </section>
  );
}
