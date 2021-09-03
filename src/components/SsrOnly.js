function SsrOnly({ children }) {
  return (
    <div style={{ display: 'none !important' }}>
      {children}
    </div>
  );
}

export default SsrOnly;
