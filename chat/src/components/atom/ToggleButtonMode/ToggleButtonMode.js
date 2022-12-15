import { useColorMode,Button } from '@chakra-ui/react';

import React from 'react';


const ToggleButtonMode =()=> {
    const [toggleColor, toggleColorMode]= useColorMode();
    return (
        <Button onClick={toggleColorMode} pos="absolute" top ="0">
            Switch {toggleColor === 'light' ? 'Dark' : 'Light'}
        </Button>
    )


}

export default ToggleButtonMode