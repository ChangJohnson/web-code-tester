import { useRef, useEffect } from 'react';
import './preview.css';

interface PreviewProps {
  code: string;
}

const html = `<html><head><style>html {background-color: white;}</style></head><body><div id="root"><script>window.addEventListener('message', (event) => { try {eval(event.data);} catch(err){const root = document.querySelector('#root'); root.innerHTML = '<div style="color: red;"><h4>RunTime Error</h4>' + err + '</div>'}},false);</script></div></body></html>`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title='preview'
        ref={iframe}
        sandbox='allow-scripts'
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;