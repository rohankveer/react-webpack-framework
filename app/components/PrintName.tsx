interface Props {
  /** The user's name */
  name: string;
  /** User's priority */
  priority?: boolean;
}

const PrintName: React.FC<Props> = props => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? 'bold' : 'normal' }}>{props.name}</p>
    </div>
  );
};

export default PrintName;