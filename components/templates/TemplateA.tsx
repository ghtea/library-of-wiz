import { useCallback, useEffect, useMemo, useState } from "react"

import { Flex, Box, Button } from "components/atoms"
import { IconButton } from "components/molecules"

import sizes from "theme/sizes"
import colors from "theme/colors"

export type TemplateAProps = {
  
}


export const TemplateA: React.FunctionComponent<TemplateAProps> = ({
  children
}) => {
  return ( // color: colors["@text"]
    <Flex sx={{backgroundColor: colors["@background"], color: colors["@text"]}}>

      <Box sx={{display: ["unset", null, "none", null], width: "100%"}}>
        <Flex sx={{height: sizes.templateA.topNav.height, width: "100%", flexDirection: "row", justifyContent: "space-between", borderBottomStyle: "solid", borderBottomWidth: "2px", borderColor: "black"}} >
          <Box> W </Box>
          <Box>
            <Flex>
              <IconButton src={"svgs/bao-arrow-simple-double-down.svg"}></IconButton>
            </Flex>
          </Box>
          <Box> ? </Box>
        </Flex>
      </Box>

      <Box sx={{display: ["none", null, "unset", null]}}>
        <Flex>
          big device
        </Flex>
      </Box>
        
      <Box>
        {children}
      </Box>

    </Flex>
  )
}
