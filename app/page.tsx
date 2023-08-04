import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import FoodList from "@/app/_components/FoodList";
import FoodProvider from "@/app/_components/FoodProvider";
import RQProvider from "@/app/_components/RQProvider";
import RQFoodList from "@/app/_components/RQFoodList";
import ColorTitle from "./_components/ColorTitle";
import dynamic from "next/dynamic";
import ClientComponent from "./_components/ClientComponent";
const LazyClientComponent = dynamic(() => import('./_components/LazyClientComponent'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json());
  // const foods = await foodReq.json();
  return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <main className="max-w-6xl mx-auto mt-5 text-3xl">
            <FoodProvider foodPromise={foodReq}>
              <Suspense fallback={'loading'}>
                <FoodList/>
              </Suspense>
              <ColorTitle/>
              <LazyClientComponent/>
              <ClientComponent/>
            </FoodProvider>
          </main>
      </ErrorBoundary>
  );
}
