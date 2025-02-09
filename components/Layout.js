import Sidebar from '../components/ExploreComponents/sidebar';

const Layout = ({ children }) => (
    <div style={{ display: 'flex', height: '100%', backgroundColor: '#333333' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
  
  export default Layout;
  