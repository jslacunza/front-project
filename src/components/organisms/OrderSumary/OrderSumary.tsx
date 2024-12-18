import { Button } from "@/components/atoms/Button/Button"

export const OrderSumary = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full border-[0.5px] rounded-lg border-stroke-light h-fit px-6 py-8 mb-8">
        <p>Order sumary</p>
        <p>3 items</p>
        <div>

        </div>
      </div>
      <Button text="Checkout" style="dark" width="full"/>
    </div>
  )
}