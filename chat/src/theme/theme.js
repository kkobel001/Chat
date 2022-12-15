import { extendTheme } from "@chakra-ui/react"

const theme={
    config: {
        initialColorMode: "light",
        useSystemColorMode: true,
    },
    styles:{
        global:{
             body:{
                bg:'#6D946A',
                color:'black'
             },
             code: {
                "font-family": "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'"
              }
              
        }
    }
 }

export default extendTheme(theme);