export default function FormulaBox({ children }) {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      padding: '0rem 1rem',
      borderRadius: '0.5rem',
      fontFamily: 'monospace',
      color: 'white',
      display: 'inline-block'
    }}>
      {children}
    </div>
  );
}
