import {typography} from "../src/theme";
import { addParameters } from "@storybook/client-api";
import { DocsContainer } from "@storybook/addon-docs/blocks";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <div css={typography.fontFaceStyle}>
            <Story/>
        </div>
    ),
];

addParameters({
    docs: {
        container: ({ children, context }) => (
            <DocsContainer context={context}>
                <div>
                    {children}
                </div>
            </DocsContainer>
        ),
    },
});
