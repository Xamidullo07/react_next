import Image from "next/image";
import Hero from "../components/hero/page";
import Wallet from "../components/waller/page";
import Oson from "../components/oson/page";
import Boglanish from "../components/bog'lanish/page";
import Yangiliklar from "./yangiliklar/page";
import Statust from "./yangiliklar/statust/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Wallet />
      <Oson />
      <Boglanish />
    </div>
  );
}
