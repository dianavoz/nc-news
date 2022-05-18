import { useState } from 'react';

import { Button } from '@mui/material';

const ComponentChildren = ({ children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const toggleOpen = () => setShowChildren((currOpen) => !currOpen);

  return (
    <div>
      <Button
        size='large'
        variant='outlined'
        onClick={toggleOpen}
        style={{
          marginBottom: 20,
          marginTop: 20,
          borderColor: '#496175',
          color: '#496175',
        }}
      >
        {showChildren ? 'Hide Comments' : 'Show Comments'}
      </Button>
      {showChildren && children}
    </div>
  );
};
export default ComponentChildren;
