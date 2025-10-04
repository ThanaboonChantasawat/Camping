"use client";
import { Share } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const ShareButton = ({
  landmarkId,
  name,
}: {
  landmarkId: string;
  name: string;
}) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const sharelink = `${url}landmark/${landmarkId}`;
  return (
    <div>
      <Popover>
        <PopoverTrigger className="hover:scale-105 duration-300" asChild>
          <Button variant="outline">
            <Share />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex w-full gap-x-2 item-center"
          side="top"
          align="end"
        >
          <FacebookShareButton url={sharelink} name={name}>
            <FacebookIcon
              size="50px"
              className="hover:scale-105 duration-300"
            />
          </FacebookShareButton>
          <TwitterShareButton url={sharelink} name={name}>
            <TwitterIcon size="50px" className="hover:scale-105 duration-300" />
          </TwitterShareButton>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default ShareButton;
