import { Suspense } from "react";
import InsightsTabs from "@/components/InsightsTabs";

export default function InsightsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 flex-col px-6 pt-16 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-5xl">
            <h1 className="text-4xl tracking-tighter text-neutral-900 dark:text-white">
              Insights
            </h1>
          </div>
        </div>
      }
    >
      <InsightsTabs />
    </Suspense>
  );
}
