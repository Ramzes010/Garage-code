export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-[2.6vw] pb-[2.4vw]">
      <div className="pb-[2.6vw] text-center text-[#6a6a6a] text-[0.73vw] font-medium leading-[0.87vw]">
        <span className="text-[#1A1A1A] text-[0.73vw] font-medium leading-[0.87vw]">
          Garage Code
        </span>
        <br />
        Не просто школа, а целая семья
      </div>
      <div className="flex items-center text-[#868E96] mb-[1.2vw] px-[0.62vw] py-[0.36vw] rounded-[26vw] bg-white border border-[0.11vw] border-[#CED4DA] text-[0.66vw]">
        <img src="/icons/star.svg" alt="/icons/star.svg" className="w-[0.73vw] h-[0.73vw] mr-[0.68vw]" />
        <span>Все программы обновлены на 2026 год</span>
      </div>
      <div className="text-center max-w-[41.7vw]">
        <img
          className="mt-[-2.1vw] mb-[1.56vw] w-[31.7vw] h-[10.1vw]"
          src="/title.svg"
          alt="title"
        />
        <p className="text-[1.04vw] leading-[1.62vw] mb-[1.56vw] text-[#868E96]">
          С практикой в тренажере и ассистентом на базе ChatGPT
        </p>
      </div>
      <div className="flex gap-[0.72vw] mb-[2.6vw]">
        <button className="px-[1.41vw] py-[0.83vw] rounded-full bg-[#207443] text-white text-[0.94vw]">
          К курсам
        </button>
        <button className="px-[1.41vw] py-[0.83vw] rounded-full bg-white border border-[#207443] text-[#868E96] text-[0.94vw]">
          Не могу определиться
        </button>
      </div>

      <div
      className="
        w-full
        max-w-[69.6vw]
        flex
        gap-[1.25vw]
      "
    >
      <div className="flex-1 w-[19.64vw] h-[7.92vw] bg-[#207443] rounded-[0.83vw] p-[1.25vw] text-white flex flex-col">
        <img src="/icons/icon-1.svg" alt="" className="w-[1.41vw] h-[1.41vw]"/>
        <h3 className="text-[2.08vw] font-semibold">
          Сообщество
        </h3>
        <p className="text-[0.83vw] opacity-90">
          Более 500 выпускников
        </p>
      </div>
      
      <div className="flex-1 w-[19.64vw] h-[7.92vw] bg-[#207443] rounded-[0.83vw] p-[1.25vw] text-white flex flex-col">
        <img src="/icons/icon-2.svg" alt="" className="w-[1.41vw] h-[1.41vw]"/>
        <h3 className="text-[2.08vw] font-semibold">
          Доступность
        </h3>
        <p className="text-[0.83vw] opacity-90">
          Можно учиться даже с телефона
        </p>
      </div>

      <div className="flex-1 w-[19.64vw] h-[7.92vw] bg-[#207443] rounded-[0.83vw] p-[1.25vw] text-white flex flex-col">
        <img src="/icons/icon-3.svg" alt="" className="w-[1.41vw] h-[1.41vw]"/>
        <h3 className="text-[2.08vw] font-semibold">
          Онлайн
        </h3>
        <p className="text-[0.83vw] opacity-90">
          Учись с уюта собственного дома
        </p>
      </div>
    </div>

    </section>
  );
}
