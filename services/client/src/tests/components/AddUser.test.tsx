
import { it, expect, describe, afterEach, vi } from "vitest";
import { render, cleanup, screen, waitFor } from "../test-utils";
import "@testing-library/jest-dom/vitest";

import AddUser from "../../components/AddUser";


afterEach(cleanup)

describe("AddUser", () => {

    const mockAddUserToList = vi.fn();

    it("renders with default props", async () => {

        render(<AddUser addUserToList={mockAddUserToList} />);

        await waitFor( () => {

            // assert username is present
            const usernameInput = screen.getByLabelText(/Username/)
            expect(usernameInput).toHaveAttribute("type", "text")
            expect(usernameInput).toHaveAttribute("required")

            // assert email is present
            const emailInput = screen.getByLabelText(/email/i)
            expect(emailInput).toHaveAttribute("type", "email")
            expect(emailInput).toHaveAttribute("required")

            const passwordInput = screen.getByLabelText(/password/i);
            expect(passwordInput).toBeInTheDocument();
            expect(passwordInput).toHaveValue("");

            // submit button is present
            const buttonInput = screen.getByRole("button", { name: /submit/i })
            expect(buttonInput).toBeInTheDocument();
        })
    })

    it("renders", () => {
        const { asFragment } = render(<AddUser addUserToList={mockAddUserToList} />);
        expect(asFragment()).toMatchSnapshot();
  });
})