/// <reference types="nativewind/types" />

declare module "color" {
  interface ColorInstance {
    alpha(alpha: number): ColorInstance;
    toString(): string;
  }

  function Color(input: string): ColorInstance;
  export default Color;
}
