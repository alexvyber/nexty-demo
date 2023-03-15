import { Button } from "@/components/ui/Button";

import { buttonConfig } from "@/components/ui/Button/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";

const { size, variant } = buttonConfig.variants;

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-7xl font-bold text-orange-500 ">Hello world!</h1>

      <Button variant="blueVariant">AAAAAAAAAAAAAAAAA</Button>

      <div className="my-10 grid grid-cols-4 gap-6">
        {(Object.keys(variant) as Array<keyof typeof variant>).map(
          (variant) => (
            <div className="flex flex-col gap-3">
              {(Object.keys(size) as Array<keyof typeof size>).map((key) => (
                <Button variant={variant} size={key}>
                  {variant.at(0)?.toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          )
        )}
      </div>

      <div className="my-10 grid grid-cols-4 gap-6">
        {(Object.keys(variant) as Array<keyof typeof variant>).map(
          (variant) => (
            <div className="flex flex-col gap-3">
              {(Object.keys(size) as Array<keyof typeof size>).map((key) => (
                <ButtonLink href={"/"} variant={variant} size={key}>
                  {variant.at(0)?.toUpperCase() + variant.slice(1)}
                </ButtonLink>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
