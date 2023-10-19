"use client";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import dynamic from "next/dynamic";
import _ from "lodash";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});
import { useState } from "react";

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="coffee"
        // width={300}
        // height={170}
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>hello</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//   };
// }
