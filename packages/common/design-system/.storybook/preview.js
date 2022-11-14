import {typography} from "../src/theme";
import {addParameters} from "@storybook/client-api";
import {DocsContainer} from "@storybook/addon-docs/blocks";
import {Global} from "@emotion/react";

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
        container: ({children, context}) => (
            <DocsContainer context={context}>
                <Global styles={typography.fontFaceStyle}/>
                <div>{children}</div>
            </DocsContainer>
        ),
    },
});
