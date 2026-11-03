import type { Route } from "./+types/home";
import { Header } from "~/components/header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HuShine" },
    { name: "description", content: "Welcome to my page!" },
  ];
}

export default function Home() {
  return <Header />;
}
