const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(
    now,
  );

  return (
    <section className="flex size-full flex-col gap-5 text-gray-900">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-2xl font-normal">
            سلام خوش آمدید
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl  lg:text-7xl text-gray-200">{time}</h1>
            <p className="text-lg font-medium  lg:text-2xl">{date}</p>
          </div>
        </div>
        <div className=" px-4 pt-8 flex flex-col items-center text-center h-[400px] text-white ">
          <h1 className=" text-4xl  ">سلام به همگی</h1>
          <p className=" text-3xl mt-5">
            زویداد یک اپ ویدیو کال و تماس تصویری است که با ان میتوانید با
            دوستاتون تماس تصویری داشته باشید و از کنار هم بودن لذت ببرید
          </p>

          <p className=" text-3xl mt-5">
            زویداد با استفاده از فریمورک نکست بر پایه ی ریکت ساخته شده
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
