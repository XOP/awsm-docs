import { useState } from 'react';

interface CopyCodeProps {
  data: string;
  className?: string;
  onClick?: (data: string) => void;
}

const CopyCode = (props: CopyCodeProps) => {
  const { className, data, onClick } = props;

  const [busy, setBusy] = useState<boolean>(false);

  const handleCopy = async () => {
    setBusy(true);

    try {
      await navigator.clipboard.writeText(data);

      setTimeout(() => {
        setBusy(false);
      }, 800);
    } catch (e) {
      console.error('Clipboard Error', e);
    }

    onClick && onClick(data);
  };

  return (
    <span className={className}>
      <button onClick={handleCopy} title="Copy to clipboard" disabled={busy}>
        {busy ? 'Copied!' : 'Copy'}
      </button>
    </span>
  );
};

export default CopyCode;
