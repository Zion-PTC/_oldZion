import matchers from '@testing-library/jest-dom/matchers.js';
import { TestingLibraryMatchers as ITestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

export type TestingLibraryMatchers<E, R> = ITestingLibraryMatchers<E, R>;

export let toBeChecked = matchers.toBeChecked;
export let toBeDisabled = matchers.toBeDisabled;
export let toBeEmptyDOMElement = matchers.toBeEmptyDOMElement;
export let toBeEnabled = matchers.toBeEnabled;
export let toBeInTheDocument = matchers.toBeInTheDocument;
export let toBeInvalid = matchers.toBeInvalid;
export let toBePartiallyChecked = matchers.toBePartiallyChecked;
export let toBeRequired = matchers.toBeRequired;
export let toBeValid = matchers.toBeValid;
export let toBeVisible = matchers.toBeVisible;
export let toContainElement = matchers.toContainElement;
export let toContainHTML = matchers.toContainHTML;
export let toHaveAccessibleDescription = matchers.toHaveAccessibleDescription;
export let toHaveAccessibleName = matchers.toHaveAccessibleName;
export let toHaveAttribute = matchers.toHaveAttribute;
export let toHaveClass = matchers.toHaveClass;
export let toHaveDisplayValue = matchers.toHaveDisplayValue;
export let toHaveErrorMessage = matchers.toHaveErrorMessage;
export let toHaveFocus = matchers.toHaveFocus;
export let toHaveFormValues = matchers.toHaveFormValues;
export let toHaveStyle = matchers.toHaveStyle;
export let toHaveTextContent = matchers.toHaveTextContent;
export let toHaveValue = matchers.toHaveValue;
export let toBeEmpty = matchers.toBeEmpty;
export let toBeInTheDOM = matchers.toBeInTheDOM;
export let toHaveDescription = matchers.toHaveDescription;
