import * as React from "react";
const modules = import.meta.glob([
  "./algorithms/**.ts",
  "!./algorithms/**.test.ts",
  "./algorithms/**/*.ts",
  "!./algorithms/**/*.test.ts",
]);

export function Index() {
  const paths = getModuleLinks();
  return (
    <div>
      <h2>Algorithm Imdex</h2>
      <ul>
        {paths.map((path, index) => {
          return (
            <li key={path + index}>
              <a href={path}>{path}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getModuleLinks() {
  const paths = [];
  for (const path in modules) {
    const normalizedPathName = path.replace(".ts", "");
    paths.push(normalizedPathName);
  }

  return paths;
}
