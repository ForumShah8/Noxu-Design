import DataTableComponent from "./tableComponent"
import InputComponent from "./userInputComponent"
import ChatComponent from "./chatInputComponent"
function HomeFrame(){
    return (

    <div className='grid grid-rows-7 h-screen overflow-y-hidden'>
        <InputComponent/>
        <DataTableComponent/>
        <ChatComponent/>
    </div>
    )
}
export default HomeFrame