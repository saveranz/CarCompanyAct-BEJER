import React from 'react';
import PrimaryButton from './components/PrimaryButton.jsx';
import Card from './components/Card.jsx';
import * as Icons from './components/icons.jsx';

function App() {
  // Event Handler Function
  const handleClickButton = () => {
    alert('Clicked');
  };

  const items = [
    { title: 'Feature 1', icon: 'LightningBolt', description: 'Fast and reliable performance.' },
    { title: 'Feature 2', icon: 'Smartphone', description: 'Responsive design for all screens.' },
    { title: 'Feature 3', icon: 'ShieldCheck', description: 'Secure by default with best practices.' },
  ];

  return (
    <div>
      <h1>Hello react</h1>

      <PrimaryButton label="Click Me" onClick={handleClickButton} />

      <div className="cards-grid" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
        {items.map((it, idx) => {
          const IconComp = Icons[it.icon];
          return (
            <Card key={idx} icon={IconComp} title={it.title} description={it.description} />
          );
        })}
      </div>
    </div>
  );
}

export default App;