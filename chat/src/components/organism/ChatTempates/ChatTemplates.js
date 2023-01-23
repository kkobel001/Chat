import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import InputSearch from "components/atom/Search";
import ChatItem from "components/atom/ChatItem";


   
  export default function ChatTemplates() {
    return (
      <div className=" bg-slate-200 w-full h-screen ">
        <div className=" flex flew-row h-4/5 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 rounded-lg border border-gray-200 shadow-md m-5">
          <div className=" basis-1/4 rounded-lg border-4 border-dashed border-gray-400 ">
            <CardBody className="text-center">
              <InputSearch />
            <Typography variant="h5" className="mb-2">
            <ChatItem />

                Cozy 5 Stars Apartment
              </Typography>
            </CardBody>
            </div>
            <div class="basis-3/4  ml-8 rounded-lg border-4 border-dashed border-gray-400 ">
            <CardBody>
            <Typography>ddjdjdj</Typography>
            

          </CardBody>
          
            </div>


       
          
    </div>
</div>      
  );
}