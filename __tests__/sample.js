
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Sample from '@/components/Sample';

describe("this is sample test", () => {
    it("sample text data -> need text Hello world", () => {
        const { getByText } = render(<Sample />);
        const sampleText = getByText("Hello World", {
        });
        expect(sampleText).toBeInTheDocument();
    });
});