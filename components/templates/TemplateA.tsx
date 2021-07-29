import { useCallback, useEffect, useMemo, useState } from "react"

import { Flex, Box, Button } from "components/atoms"
import sizes from "theme/sizes"

export type TemplateAProps = {
  
}


export const TemplateA: React.FunctionComponent<TemplateAProps> = ({
    children
}) => {
  return (
    <Flex>

      <Box sx={{display: ["unset", null, "none", null], width: "100%"}}>
        <Flex sx={{height: sizes.templateA.topNav, width: "100%", flexDirection: "row", justifyContent: "space-between", borderBottomStyle: "solid", borderBottomWidth: "2px", borderColor: "black"}} >
          <Box> W </Box>
          <Box>
            <Flex>
              <Button> V </Button>
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
