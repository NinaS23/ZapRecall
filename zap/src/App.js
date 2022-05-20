import { useState } from 'react';
import Start from './Start';


function App() {
  const [page , setPage] = useState(false)
  return (
    <>
    <Start setPage={setPage} page={page} />
    
    
    </>
  );
}

export default App;
