import Footer from "./Footer"
import Header from "./Header"

const index = ({children}) => {
  return (
    <div className="flex flex-col h-lvh overflow-auto" >
        <Header/>
            <div className="grow bg-[#F6F9F9] px-[2%] lg:px-[10%] pt-[2%] overflow-auto">
                {children}
            </div>
        <Footer/>
    </div>
  )
}

export default index