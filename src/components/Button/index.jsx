import PropTypes from "prop-types";

import { Button } from "./styles";

function DefaultButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
