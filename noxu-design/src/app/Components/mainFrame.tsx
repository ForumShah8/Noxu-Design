import DataTableComponent from "./tableComponent"
import InputComponent from "./userInputComponent"
import ChatComponent from "./chatInputComponent"

// this is the main homeframe component 
function HomeFrame(){
    return (
    <div className="h-screen w-screen overflow-hidden">
        {/* three sub components are called here */}

        <InputComponent/>
        {/* InputComponent has the top most part with user avatar and the message prompt */}

        
        <DataTableComponent/>
        {/* this contains the table with data and other buttons */}

        <ChatComponent/>
        {/* this component is the bottom most component where chat component is provided */}
    </div>
    )
}
export default HomeFrame