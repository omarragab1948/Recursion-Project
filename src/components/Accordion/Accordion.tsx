import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

interface Props {
    title: string;
    content: React.ReactNode;  
    onClick: () => void;
    clicked: boolean ; 
}

export default function AccordionComp({title, content, onClick, clicked} : Props) {
  return (
    <Box>
      <Accordion sx={{boxShadow: "none", bgcolor: clicked ? "#FF8E29" : "transparent", color: clicked ? "white" : ""}} onClick={onClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
            {content}
        </AccordionDetails>
      </Accordion>

    </Box>
  );
}
