declare module "asciidoctor-kroki" {
  //   export const register = function <T = Asciidoctor["Extensions"]>(
  //     registry: T,
  //     context = {}
  //   ): T {};
  import { Asciidoctor } from "asciidoctor";
  export function register<T = Asciidoctor["Extensions"]>(
    registry: T,
    context?: Record<string, any>
  ): T {}
}
