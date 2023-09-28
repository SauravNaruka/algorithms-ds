import * as React from "react";
import { useLocation } from "react-router-dom";

type UnkownFunctionType = (...args: (string | number)[]) => string;
type Module = {
  default: UnkownFunctionType;
};

export function useLazyFunctionImport() {
  const [module, setmodule] = React.useState<Module | null | undefined>();
  const [numberOfArgs, setNumberOfArgs] = React.useState(0);

  const location = useLocation();
  const functinName = location.pathname
    .split("/algorithms/")[1]
    .replace("/", "");

  React.useEffect(() => {
    async function getModule() {
      try {
        const module = (await import(
          `../algorithms/${functinName}/${functinName}.ts`
        )) as Module;

        setmodule(module);
        setNumberOfArgs(module.default.length);
      } catch (e) {
        if (e instanceof Error) {
          console.error(`${e.name} ${e.message}`);
        } else {
          console.error(e);
        }
        setmodule(null);
        setNumberOfArgs(0);
      }
    }
    getModule();
  }, [functinName]);

  return [module, numberOfArgs, location.pathname] as const;
}
