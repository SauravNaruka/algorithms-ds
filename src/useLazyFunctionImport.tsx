import * as React from "react";
import { useLocation } from "react-router-dom";

type UnkownFunctionType = (...args: (string | number)[]) => string;
type Module = {
  default: UnkownFunctionType;
};

const modules = import.meta.glob("./algorithms/*.ts");

function loadComponent(fileName: string) {
  return modules[`./algorithms${fileName}.ts`]();
}

export function useLazyFunctionImport() {
  const [module, setmodule] = React.useState<Module | null>(null);
  const [numberOfArgs, setNumberOfArgs] = React.useState(0);

  const location = useLocation();

  React.useEffect(() => {
    async function getModule() {
      try {
        const module = (await loadComponent(location.pathname)) as Module;
        setmodule(module);
        setNumberOfArgs(module.default.length);
      } catch (e) {
        if (e instanceof Error) {
          console.error(`${e.name} ${e.message}`);
        } else {
          console.error(e);
        }
      }
    }
    getModule();
  }, [location]);

  return [module, numberOfArgs, location.pathname] as const;
}
