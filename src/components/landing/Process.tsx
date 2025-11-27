import Wrapper from "../global/Wrapper";
import Image from "next/image";
const Process = () => {
  const ProcessData = [
    {
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica",
    },
    {
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica",
    },
    {
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica",
    },
  ];
  return (
    <Wrapper className="py-20">
      {/* Process section Started */}
      <div className="text-center pb-5 sm:pb-10 flex flex-col items-center justify-center">
        <p className="text-[#111] font-semibold flex items-center justify-center gap-2 border border-[#111] rounded-full px-5 py-1 mb-5 text-sm">
          PROCESS
        </p>
        <h1 className="max-w-sm text-[25px] sm:text-3xl font-semibold">
          How It Works Today
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 xl:px-25 sm:py-10 gap-12">
        {ProcessData &&
          ProcessData.map((item, i) => {
            return (
              <div className="px-4 sm:px-10 bg-gray-200/30 p-5 rounded" key={i}>
                {/* need to add dotted wave line here */}
                <span className="max-px-1 max-w-6 max-h-6 bg-[#2D605A] rounded-[50%] text-white flex justify-center">
                  {i + 1}
                </span>
                <h1 className="text-md font-semibold sm:py-3">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
      </div>

      {/* styled bar */}
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex gap-1">
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
        </div>

        <h1 className="text-center sm:text-4xl max-w-2xl font-semibold py-15">Before Reap, I used to get constant follow-ups from Medicaid. Now my cases get approved the first time.</h1>
        
        {/* manager profile */}
        <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border border-gray-200/30 rounded-full bg-gray-600 flex items-center justify-center"><Image width={50} height={50} src={"/profile.jpeg"} className={"w-full h-full rounded-full"} alt="photo"/></div>
            <h1 className="font-semibold mt-2">Stephine</h1>
            <p>Business Office Manager, AL</p>
        </div>

      </div>
    </Wrapper>
  );
};

export default Process;
