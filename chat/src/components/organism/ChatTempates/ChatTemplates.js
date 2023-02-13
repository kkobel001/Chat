import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import InputSearch from "components/atom/Search";
import ChatItem from "components/atom/ChatItem";
import MessageTemplates from "../MessageTemplates/MessageTemplates";


   
  export default function ChatTemplates() {
    return (
      <div className="bg-slate-200 w-full h-screen ">
        <div className="flex flew-row h-4/5 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 rounded-lg border border-gray-200 shadow-md m-5">
          <CardBody className="basis-1/4 rounded-lg border-4 border-dashed border-gray-400 ">
              <InputSearch />
            <Typography variant="h5" className="mb-2">
            <ChatItem />
               
              </Typography>
            </CardBody>
            <CardBody className="basis-3/4  ml-8 rounded-lg border-4 border-dashed border-gray-400 ">
            <CardBody>
            <MessageTemplates />

          </CardBody>
            </CardBody>
    
    </div>
</div>      
  );
}