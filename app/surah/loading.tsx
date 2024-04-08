import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSurah() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="layout flex flex-col space-y-3 py-16">
      <Skeleton className="h-4 w-[250px]" />

      <div className="space-y-2 py-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
