import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { Breadcrum } from "@/components/molecules/Breadcrum/Breadcrum";
import { GameCart } from "@/components/molecules/GameCart/GameCart";
import { OrderSumary } from "@/components/organisms/OrderSumary/OrderSumary";

export default async function Cart() {
  const arr = [1,2,3]
  return (
    <>
      <PageTitle text='Your Cart' subtitle='5 items' />
      <div className="flex w-full justify-between">
        <section className="flex flex-col w-[678px]">
          {arr.map((item, index) => {
            return (
              <>
                <GameCart key={item} />
                {index !== arr.length-1 && (
                  <hr />
                )}
              </>
            )
          })}
        </section>
        <section className='flex w-[522px]'>
          <OrderSumary />
        </section>
      </div>
    </>
  )
}