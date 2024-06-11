const DefaultUsername = ({ displayName, color }: { displayName: string; color: string }) => {
  return <span style={{ color }}>{displayName}</span>;
};

export default DefaultUsername;
