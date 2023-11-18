import { tokens } from '@awsm/tokens';
import jsxToString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CopyCode from '../CopyCode/CopyCode';

import styles from './SourceCode.module.css';

interface SourceCodeProps {
  children: JSX.Element;
}

const SourceCode = (props: SourceCodeProps) => {
  const { children: jsxCode } = props;

  const sourceCodeData = jsxToString(jsxCode);

  return (
    <div className={styles.root}>
      <div
        className={styles.code}
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
        <CopyCode data={sourceCodeData} />
      </div>
    </div>
  );
};

export default SourceCode;
