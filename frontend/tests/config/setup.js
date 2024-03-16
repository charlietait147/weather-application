import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// This line is important to be able to use all of the matchers as expected!
import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
});