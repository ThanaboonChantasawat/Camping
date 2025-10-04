import Link from "next/link";
import { Button } from "../ui/button";

const EmtryList = ({
  heading = "Not found",
  message = "Please try again",
  btnText = "clear filter",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-lg mb-4">{message}</p>
      <Button className="capitalize mb-4" asChild>
        <Link href={"/"}>{btnText}</Link>
      </Button>
    </div>
  );
};
export default EmtryList;
