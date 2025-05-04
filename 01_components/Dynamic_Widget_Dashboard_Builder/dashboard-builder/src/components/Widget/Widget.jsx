import React from 'react'
import './Widget.css'
import LoadingSpinner from '../UI/LoadingSpinner';

function Widget({ header, loading, error, data }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleCollapse = () => {
    console.log(isCollapsed);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='widget-container'>
      {loading ? (
        <div className="widget-loading">
        <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="widget-header">
            <h2 className='header-content'>{header}</h2>
            <button className='widget-toggle' onClick={toggleCollapse}>
              {isCollapsed ? 'show' : 'hide'}
            </button>
          </div>

          {!isCollapsed && (
            <div className="widget-body">
              {/* Render actual content using `data` here */}
              <p>Widget Content Placeholder</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Widget;
