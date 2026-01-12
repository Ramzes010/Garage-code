export default function Reviews() {
  return (
    <section className="w-full flex flex-col items-center py-[4.2vw]">
      
      <h2 className="text-[2.34vw] font-semibold text-[#393939] mb-[2.6vw]">
        Отзывы
      </h2>

      {/* Cards wrapper — ТУТ ТЫ СДЕЛАЕШЬ 3D + SCROLL */}
      <div
        className="
          w-full
          max-w-[69.6vw]
          flex
          gap-[1.25vw]
        "
      >
        {/* Review card placeholder */}
        <div className="w-[16.7vw] h-[8.3vw] bg-white border border-[#DEE2E6] rounded-[1.04vw]" />
        <div className="w-[16.7vw] h-[8.3vw] bg-white border border-[#DEE2E6] rounded-[1.04vw]" />
        <div className="w-[16.7vw] h-[8.3vw] bg-white border border-[#DEE2E6] rounded-[1.04vw]" />
        <div className="w-[16.7vw] h-[8.3vw] bg-white border border-[#DEE2E6] rounded-[1.04vw]" />
      </div>

    </section>
  );
}
