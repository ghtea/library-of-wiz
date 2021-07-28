import { useCallback, useEffect, useMemo, useState } from "react"

import { Flex, Box } from "components/atoms"

export type TemplateAProps = {
  
}

export const TemplateA: React.FunctionComponent<TemplateAProps> = ({
    children
}) => {
  return (
    <Flex>

        <Box sx={{display: ["none", null, "unset", null]}}>
            <Flex>
                big device
            </Flex>
        </Box>

        <Box sx={{display: ["unset", null, "none", null]}}>
            <Flex>
                small device
            </Flex>
        </Box>
        
        <Box>
            {children}
        </Box>

    </Flex>
  )
}
