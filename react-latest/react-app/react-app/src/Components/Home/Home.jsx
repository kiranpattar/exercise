import React , {useState}from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [login , setLogin] = useState(true)
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Website {login + login}</h1>
        <p>Explore the amazing features we offer.</p>
      </header>

      <div style={styles.section}>
        <div style={styles.card}>
          <h2>About Us</h2>
          <p>Learn more about our mission and values.</p>
          <Link to="/about" style={styles.button}>Go to About Page</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '30px',
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '10px',
  }
};

export default Home;
