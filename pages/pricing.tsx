import Link from "next/link";

import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function About() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/pricing.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};