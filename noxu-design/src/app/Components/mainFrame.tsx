import DataTableComponent from "./tableComponent"
import InputComponent from "./userInputComponent"
import ChatComponent from "./chatInputComponent"
function HomeFrame(){
    return (
    <div className="h-screen w-screen overflow-hidden mx-auto">
        <InputComponent/>
        <DataTableComponent/>
        <ChatComponent/>
    </div>
    )
}
export default HomeFrame