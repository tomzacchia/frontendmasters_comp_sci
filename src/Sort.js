import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // code goes here
  let hasSwapBeenMade = true;

  // 1. loop while isSorted is false
  do {
    hasSwapBeenMade = false;

    // 2. compare two index values
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);
      let isEndOfArray = i === nums.length - 1;
      if (isEndOfArray) break;

      let current = nums[i];
      let next = nums[i + 1];

      if (current > next) {
        nums[i] = next;
        nums[i + 1] = current;
        hasSwapBeenMade = true;
      }
    }
  } while (hasSwapBeenMade);

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(20)));
  done();
  return <App />;
}
