import React from 'react'

const orientation = () => {
    return (
        <>
          <div className="landscape-warning" style={{ display: 'none', textAlign: 'center', marginTop: '50%' }}>
            <h2>Please rotate your device to portrait mode</h2>
          </div>
          <div id="root">
            {/* Your app content */}
            <h1>My React App</h1>
          </div>
        </>
      );
}

export default orientation