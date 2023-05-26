// import Counter from './Counter/Counter';
import React from 'react';
// import Dropdawn from './Counter/Dropdawn';
import ColorPicker from './Counter/Colorpicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Dropdawn />
      <Counter /> */}
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
export default App;
