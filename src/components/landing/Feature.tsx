import { CheckCircle, CircleCheck, CircleCheckBig, HandCoins, Mic, PenLine, Shredder, Sparkle } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Wrapper from "@/components/global/Wrapper"

const Feature = () => {
    const FeatureData = [
        {
            img: "/hero-img.jpeg",
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        },
        {
            img: "/hero-img.jpeg",
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        },
        {
            img: "/hero-img.jpeg",
            title: "Contrary to popular belief, Lorem",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classica"
        }
    ]


  return (
    <div  className="py-20 w-full">
        <Wrapper>
            {/* feature header */}
            <div className="text-center pb-5 sm:pb-10 flex flex-col items-center justify-center">
                <p className="text-[#111] font-semibold flex items-center justify-center gap-2 border border-[#111] rounded-full px-5 py-1 mb-5 text-sm"><PenLine className="w-4 h-4" />FEATURES</p>
                <h1 className="max-w-sm text-[25px] sm:text-3xl font-semibold">Built to Solve the Chalanges You Face Every Day .</h1>
            </div>
            

            <div className="grid sm:grid-cols-2 gap-10 sm:px-24">
                {/* left side -> feature */}
                <div className="bg-gray-200/30 p-4 rounded">
                    <div className="flex gap-4">
                        <span><Sparkle className='w-6 h-6 bg-[#2D605A] rounded-[50%] p-1 text-white ' /></span>
                        <div className="text-start bg-[#2D605A] p-2 rounded-bl-xl rounded-br-xl rounded-tr-xl text-sm text-gray-200 max-w-[250px]">
                            <h1 className="mb-2">lets get started</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>


                    <div className="flex items-center justify-between gap-2 mt-5">
                        <div className='flex items-center justify-center bg-white rounded min-w-[90%]'>
                            <input type="email" name="email" placeholder='Your email address' className='outline-none bg-transparent placeholder:font-bold font-semibold ps-2 pe-3 w-full' />
                            <Button className='bg-[#2E625A]'>Book a demo</Button>
                        </div>
                        <Mic />
                    </div>

                    <h1 className="text-xl font-semibold sm:my-3">Work Smarter, <br /> not harder</h1>
                    <p className="text-gray-600 py-1">Your team gets guided, support not guesswork.</p>
                </div>

                {/* right side -> feature */}
                <div className="bg-gray-200/30 p-4 rounded">
                    <div className="flex flex-col gap-2 -me-4">
                        <div className="flex gap-3 items-center text-muted-foreground bg-white py-2 px-1 border border-primary/20">
                            <CircleCheck/>
                            <p className="line-through">this is headline of content</p>
                        </div>
                        
                        <div className="flex gap-3 items-center bg-white py-2 px-1 border border-primary/20">
                            <CircleCheck className="text-green-400"/>
                            <p className="">this is headline of content</p>
                            <input type="date" defaultValue={new Date().toISOString().split("T")[0]} readOnly className="ml-auto outline-0" />
                        </div>
                        <div className="flex gap-3 items-center bg-white py-2 px-1 border border-primary/20">
                            <p className="sm:ps-10">level of care</p>
                        </div>

                        <div></div>
                    </div>
                    
                    <h1 className="text-xl font-semibold sm:my-3">Trace every case, <br /> in one place </h1>
                    <p className="text-gray-600 py-1">Your team gets guided, support not guesswork.</p>
                </div>

            </div>
            
            
            {/* all features here */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 xl:px-25 sm:py-10 gap-12">
                {
                    FeatureData && FeatureData.map((item, i)=>{
                        return(
                            <div className="px-4 sm:px-10 bg-gray-200/30 p-5 rounded" key={i}>
                                <Image src={item.img}  width={100} height={100} alt="img" className="w-full rounded" />
                                <h1 className="text-md font-semibold py-2 sm:py-3">{item.title}</h1>
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

export default Feature
