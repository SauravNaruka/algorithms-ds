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
      <h3>{fileName}</h3>
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
