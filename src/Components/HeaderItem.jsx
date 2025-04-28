import React from "react";
import PropTypes from "prop-types";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3 transition duration-150 ease-in-out">
      {Icon && <Icon className="w-5 h-5" />}
      <h2 className="hidden md:block">{name}</h2>
    </div>
  );
}

HeaderItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default HeaderItem;
