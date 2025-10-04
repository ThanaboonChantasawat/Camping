import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <Skeleton className="h-8 w-1/4 mb-2 rounded-md" />
      <Skeleton className="h-[300px] md:h-[500px] w-full rounded-md" />
      <Skeleton className="h-8 w-full mt-2 rounded-md" />
      <Skeleton className="h-8 w-3/4 mt-2 rounded-md" />
      <Skeleton className="h-8 w-2/4 mt-2 rounded-md" />
    </>
  );
};
export default loading;
