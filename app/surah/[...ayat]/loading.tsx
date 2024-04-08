import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingAyat() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="layout flex flex-col space-y-3 py-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <Skeleton className="h-[125px] w-full rounded-xl" />
    </div>
  );
}
