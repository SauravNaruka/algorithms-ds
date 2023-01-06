import * as React from "react";
import { useLazyFunctionImport } from "./useLazyFunctionImport";

export function App() {
  const [values, setValues] = React.useState<(string | number)[]>([]);
  const [result, setResult] = React.useState<string | number>("");
  const [module, numberOfArgs, fileName] = useLazyFunctionImport();

  if (!module) {
    return <div>No function exist</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">{fileName}</h1>
      <div>
        {Array(numberOfArgs)
          .fill(0)
          .map((_item, index) => {
            return (
              <input
                key={index}
                type="text"
                value={values[index]}
                onChange={(event) => {
                  const updatedValue = [...values];
                  updatedValue[index] = event.target.value;
                  setValues(updatedValue);
                }}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            );
          })}
      </div>
      <button
        onClick={() => {
          const result = module.default(...values);
          setResult(result);
        }}
      >
        Execute
      </button>
      <div>{result}</div>
    </div>
  );
}
