import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-sky-400">
      <Link href={"/home"}>home</Link>
    </div>
  );
}
