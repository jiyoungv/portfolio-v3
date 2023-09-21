import PropTypes from 'prop-types';
import Header from 'component/Header';
import Footer from 'component/Footer';

const AppLayout = ({ children }) => {
  return (
    <div id="wrap">
      <Header />
      <div id="container">{children}</div>
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
