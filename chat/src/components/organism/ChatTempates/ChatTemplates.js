import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export default function ChatTemplates() {
    return (
      <Card className="w-96">
        <CardHeader color="blue" className="relative h-56">
          <img
            src="/img/blog.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Cozy 5 Stars Apartment
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </Typography>
        </CardBody>
   
    </Card>
  );
}