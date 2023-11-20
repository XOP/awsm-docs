import { tokens } from '@awsm/tokens';
import clsx from 'clsx';
import jsxToString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useStore } from '@nanostores/react';

import Button from '../Button/Button';
import CopyCode from '../CopyCode/CopyCode';

import { sourceCode, showSourceCode } from '../../store/store';

import styles from './SourceCode.module.css';

interface SourceCodeProps {
  children: JSX.Element;
}

const SourceCode = (props: SourceCodeProps) => {
  const { children: jsxCode } = props;

  const $showSource = useStore(sourceCode);

  const sourceCodeData = jsxToString(jsxCode);

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.code, {
          [styles.__open]: $showSource,
        })}
      >
        <SyntaxHighlighter
          language="tsx"
          style={{
            ...materialOceanic,
            ...{
              'pre[class*="language-"]': {
                ...materialOceanic['pre[class*="language-"]'],

                margin: 0,
                padding: tokens.space[8],
              },
            },
          }}
        >
          {sourceCodeData}
        </SyntaxHighlighter>
      </div>
      <div className={styles.controls}>
        <Button onClick={() => showSourceCode(!$showSource)}>Toggle Code</Button>
        <CopyCode data={sourceCodeData} />
      </div>
    </div>
  );
};

export default SourceCode;
