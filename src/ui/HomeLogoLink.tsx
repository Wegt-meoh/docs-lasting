import Link from "next/link";

export default function LogoLink() {
  return (
    <Link
      href={"/"}
      role={"logo"}
      className="text-4xl text-green-50 no-underline hover:text-green-50"
      children="L"
    />
  );
}
