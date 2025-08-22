import './style.css';

function createButton(text: string, fileName: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'cta';
  btn.textContent = text;
  btn.addEventListener('click', () => {
    // Use an anchor with download attribute to trigger download from public folder
    const a = document.createElement('a');
    a.href = `/downloads/${fileName}`;
    a.download = fileName; // hint the browser to download
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
  return btn;
}

function buildUI() {
  const root = document.getElementById('app')!;

  const container = document.createElement('main');
  container.className = 'container';

  const title = document.createElement('h1');
  title.textContent = 'Free Downloads';

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Click a button to download your file.';

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  // Update the file names below to match what you place in public/downloads/
  const permBtn = createButton('Free Perm', 'free-perm.rar');
  const fnBtn = createButton('Free FN', 'release.rar');

  buttons.append(permBtn, fnBtn);
  container.append(title, subtitle, buttons);
  root.append(container);
}

buildUI();
