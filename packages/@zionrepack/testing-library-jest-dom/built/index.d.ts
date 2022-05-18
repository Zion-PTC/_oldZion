import { TestingLibraryMatchers as ITestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
export declare type TestingLibraryMatchers<E, R> = ITestingLibraryMatchers<E, R>;
export declare let toBeChecked: () => void;
export declare let toBeDisabled: () => void;
export declare let toBeEmptyDOMElement: () => void;
export declare let toBeEnabled: () => void;
export declare let toBeInTheDocument: () => void;
export declare let toBeInvalid: () => void;
export declare let toBePartiallyChecked: () => void;
export declare let toBeRequired: () => void;
export declare let toBeValid: () => void;
export declare let toBeVisible: () => void;
export declare let toContainElement: (element: SVGElement | HTMLElement) => void;
export declare let toContainHTML: (htmlText: string) => void;
export declare let toHaveAccessibleDescription: (text?: any) => void;
export declare let toHaveAccessibleName: (text?: any) => void;
export declare let toHaveAttribute: (attr: string, value?: unknown) => void;
export declare let toHaveClass: {
    (...classNames: string[]): void;
    (classNames: string, options?: {
        exact: boolean;
    }): void;
};
export declare let toHaveDisplayValue: (value: string | RegExp | (string | RegExp)[]) => void;
export declare let toHaveErrorMessage: (text?: any) => void;
export declare let toHaveFocus: () => void;
export declare let toHaveFormValues: (expectedValues: Record<string, unknown>) => void;
export declare let toHaveStyle: (css: string | Record<string, unknown>) => void;
export declare let toHaveTextContent: (text: string | RegExp, options?: {
    normalizeWhitespace: boolean;
}) => void;
export declare let toHaveValue: (value?: string | number | string[]) => void;
export declare let toBeEmpty: () => void;
export declare let toBeInTheDOM: (container?: SVGElement | HTMLElement) => void;
export declare let toHaveDescription: (text?: any) => void;
