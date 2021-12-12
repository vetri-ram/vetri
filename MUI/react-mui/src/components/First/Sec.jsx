
import React from 'react';


class Mywebsite extends React.Component
{
  render()
  {
    return (
      <div>
      <h1>Welcome</h1>
    </div>
    ) 
  }
}

class MyNewwebsite extends React.Component
{
  render()
  {
    return (
      <div>
      <Mywebsite/>
      <h2>Subashvetri.wordpress.com</h2>
    </div>
    ) 
  }
}

export default MyNewwebsite;