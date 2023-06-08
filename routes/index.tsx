import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Calendar } from "../components/Calendar.tsx";
import { Button } from "../components/Button.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/calendar.css" />
      </Head>
      <Calendar/>
    </>
  );
}
