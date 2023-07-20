import React from 'react';

const App = () => {
  return (
  

    

    <div style={{ backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ backgroundColor: 'grey', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', border: '1px solid black', borderRadius: '5px', textAlign: 'left' }} method="post" action="{% url '/register' %}">
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="Firstname">Firstname:</label>
          <input type="text" id="Firstname" name="Firstname" pattern="[A-Za-z]+" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="Lastname">Lastname:</label>
          <input type="text" id="Lastname" name="Lastname" pattern="[A-Za-z]+" required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label>Gender:</label>
          <input type="radio" id="male" name="gender" value="male" checked required />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" required />
          <label htmlFor="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" required />
          <label htmlFor="other">Other</label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="MobailNumber">MobailNumber:</label>
          <input type="text" id="MobailNumber" name="MobailNumber" pattern="[0-9]{1}[0-9]{9}"  required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  required />
        </div>
        <a href='#'><button type="submit">Submit</button></a>
        

      </form>
    </div>
  );
};

export default App;
