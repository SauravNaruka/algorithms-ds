import * as React from "react";
import { paths } from "./algorithms/algorithmsIndex";

export function HomePage() {
  return (
    <div>
      <h2>Algorithms</h2>
      <ul>
        {paths.map((path, index) => {
          return (
            <li key={path + index}>
              <a href={"algorithms/" + path}>{path}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
