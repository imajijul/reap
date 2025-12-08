import { CircleCheckBig, HandCoins, Shredder } from "lucide-react"

import Wrapper from "@/components/global/Wrapper"

const Introduce = () => {
    const IntroData = [
        {
            icon: <CircleCheckBig />,
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        },
        {
            icon: <HandCoins />,
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        },
        {
            icon: <Shredder />,
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        }
    ]


  return (
    <div  className="py-20">
        <Wrapper>
            <div className="text-center pb-5 sm:pb-10 flex flex-col items-center justify-center">
                <p className="pb-3 text-[#111] font-semibold">Introducing our first module......</p>
                <h1 className="max-w-md text-2xl sm:text-4xl font-semibold">AI powered medicaid case management</h1>
            </div>
            <div className="grid sm:grid-cols-3 px-10 gap-8 sm:gap-12">
                {
                    IntroData && IntroData.map((item, i)=>{
                        return(
                            <div className="px-4 sm:px-10" key={i}>
                                <span className="inline-block text-[#1A3D64] pb-2 sm:pb-5">{item.icon}</span>
                                <h1 className="pb-2 sm:pb-3 text-xl font-semibold">{item.title}</h1>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    </div>
  )
}

export default Introduce
