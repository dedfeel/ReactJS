import React, { useReducer, useEffect } from 'react';

const initialState = {
  name: '',
  savedName: '',
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'Set_name':
      return { ...state, name: action.payload };
    case 'Set_start':
      return { ...state, loading: true };
    case 'Set_ok':
      return { ...state, loading: false, savedName: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('name');
    if (saved) {
      dispatch({ type: 'Set_ok', payload: saved });
    }
  }, []);

  const saveName = () => {
    dispatch({ type: 'Set_start' });

    setTimeout(() => {
      localStorage.setItem('name', state.name);
      dispatch({ type: 'Set_ok', payload: state.name });
    }, 1000);
  };

  return (
    <div>
      <h2> Пайдаланушы есімі</h2>

      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'Set_name', payload: e.target.value })
        }
        placeholder="Есіміңд енгіз"
      />

      <button
        onClick={saveName}
        disabled={state.loading || !state.name.trim()}
      >
        {state.loading ? 'Сақталуда...' : 'Сақтау'}
      </button>

      <div style={{display: 'flex' , alignItems: 'center', gap: '12px'}}>
        <h3>Соңғы сақталған есім: </h3>
        {state.savedName && (
          <p style={{ color: 'green' }}>{state.savedName}</p>
        )}
      </div>
    </div>
  );
}

export default App;
