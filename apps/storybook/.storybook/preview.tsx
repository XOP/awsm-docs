import React from 'react';

import dedent from 'dedent';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from '@storybook/blocks';

import type { Preview } from '@storybook/react';

import { StoryDecorator } from './helpers/StoryDecorator';

// ui core styles
import '../../../packages/awsm-ui/src/assets/styles/index.css';

// import { excludedControls } from './config/excludedControls';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      expanded: false,
      sort: 'requiredFirst',
      // exclude: excludedControls,
      matchers: {
        date: /Date$/,
      },
    },

    docs: {
      canvas: {
        sourceState: 'shown',
      },
      source: {
        transform: (code: string) => {
          if (!code.includes('render: (')) {
            return code;
          } else {
            let _code = code;

            // extracting from render:
            const _parsed = code.match(
              /(?<=render: \(\) => )<+(.|\n)+>+(?=,)?/
            );

            if (_parsed && _parsed[0]) {
              _code = _parsed[0];
            }

            return dedent(_code);
          }
        },
      },

      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  },

  decorators: [
    (Story) => (
      <StoryDecorator>
        <Story />
      </StoryDecorator>
    ),
  ],
};

export default preview;
