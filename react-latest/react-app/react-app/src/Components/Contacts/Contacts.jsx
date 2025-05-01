import React from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Website</h1>
        <p>Explore the amazing features we offer.</p>
      </header>

      <section style={styles.section}>
        <div style={styles.card}>
          <h2>Contact Us</h2>
          <p>Get in touch with our team for more information.</p>
          <Link to="/contacts" style={styles.button}>Go to Contact Page</Link>
        </div>
      </section>
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

export default Contacts;
