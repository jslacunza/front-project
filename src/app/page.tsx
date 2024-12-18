import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { GameCard } from "@/components/molecules/GameCard/GameCard";

export default async function Home() {
  return (
    <>
      <PageTitle text='Top Sellers' />
      <hr />
      <GameCard showTag={true} />
    </>
  )
}
