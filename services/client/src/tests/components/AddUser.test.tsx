
import { it, expect, describe, afterEach } from "vitest";
import { render, cleanup, screen } from "../test-utils";
import "@testing-library/jest-dom/vitest";

import AddUser from "../../components/AddUser";


afterEach(cleanup)

describe("AddUser", () => {
    it("renders with default props", () => {

        render(<AddUser />)

        // assert username is present
        const usernameInput = screen.getByLabelText(/Username/)
        expect(usernameInput).toHaveAttribute("type", "text")
        expect(usernameInput).toHaveAttribute("required")

        // assert email is present

        const emailInput = screen.getByLabelText(/email/i)
        expect(emailInput).toHaveAttribute("type", "email")
        expect(emailInput).toHaveAttribute("required")

        // submit button is present
        const buttonInput = screen.getByRole("button", { name: /submit/i })
        expect(buttonInput).toBeInTheDocument();
    })
})