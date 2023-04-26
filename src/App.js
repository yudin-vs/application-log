import React from 'react';

const App = () => {
  const [resources, setResources] = React.useState([]);

  React.useEffect(() => {
    fetch('/resources')
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
      });
  }, []);

  return (
    <div>
      <h1>Resources</h1>
      {resources.map((resource) => (
        <div key={resource.id}>
          <p>ID: {resource.id}</p>
          <p>Name: {resource.name}</p>
        </div>
      ))}
    </div>
  );
};

export default App;