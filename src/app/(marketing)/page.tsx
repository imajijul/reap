import Wrapper from "@/components/global/Wrapper"
import CTA from "@/components/landing/CTA"
import Feature from "@/components/landing/Feature"
import Hero from "@/components/landing/Hero"
import Introduce from "@/components/landing/Introduce"
import Overview from "@/components/landing/Overview"
import Process from "@/components/landing/Process"


const Page = () => {
  return (
    <>
     <Wrapper>
        <Hero/>
     </Wrapper>

     <Introduce/>
     <Feature/>
     <Process/>
     <Overview/>
     <CTA/>


    
    </>
  )
}

export default Page


