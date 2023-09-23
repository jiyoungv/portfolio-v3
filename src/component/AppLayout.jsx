import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div id="wrap">
      <div id="container">{children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
