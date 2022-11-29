import React from 'react'
import Power from '@material-ui/icons/PowerSettingsNew'
import  {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
const Powers = ({main}) => {
  return (

      <Link to="/">
        <Button
          style={{
            position: "fixed",
            left: "50%",
            top:'4%',
            zIndex: "2",
            transform: "translate(-50%,0)",
          }}
        >
          <Power />
        </Button>
      </Link>

  );
}

export default Powers
