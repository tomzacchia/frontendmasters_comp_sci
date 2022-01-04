import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // code goes here
  // code goes here
  for (let i = 1; i < nums.length; i++) {
    snapshot(nums);
    let numberToInsert = nums[i];
    let currentNumIndex;

    // shift all bigger numbers to the right
    for (currentNumIndex = i - 1; currentNumIndex >= 0; currentNumIndex--) {
      if (nums[currentNumIndex] < numberToInsert) break;

      nums[currentNumIndex + 1] = nums[currentNumIndex];
    }

    // insert numberToInsert
    nums[currentNumIndex + 1] = numberToInsert;
  }

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(20)));
  done();
  return <App />;
}
