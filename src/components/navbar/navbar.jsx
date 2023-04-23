import React, { useState } from 'react';
import {Box} from "@chakra-ui/react";
import './navbar.css' 

export const Navbar = () => {
    const [display , setDisplay] = useState(false);
  return (
    <Box 
    display={display? "none" : "block"}
    className='nav'>

    </Box>
  )
}

