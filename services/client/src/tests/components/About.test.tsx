
import {render, cleanup } from "../test-utils"
import { it, expect, afterEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import About from "../../components/About"

afterEach(cleanup)

it("renders properly", () => {
    const { getByText } = render(<About />)
    expect
})