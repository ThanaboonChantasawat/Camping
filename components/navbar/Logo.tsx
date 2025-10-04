import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button className="text-2xl" size='sm' asChild>
      <Link href="/">
        Logo
      </Link>
    </Button>
  );
};
export default Logo;
