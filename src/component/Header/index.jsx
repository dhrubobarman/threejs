import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import { AiOutlineInteraction, AiOutlineCar } from "react-icons/ai";
import { IconButton } from "@mui/material";

const textIcon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  textAlign: "center",
  marginBottom: "10px",
  svg: {
    width: "40px",
    height: "40px",
  },
};

export default function Header() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
        my={3}
        sx={{
          borderRadius: "0px",
          margin: "10px 0 !important",
          padding: "15px 20px",
        }}
        className={!expanded && "height0"}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ borderRadius: "0px" }}
        >
          <Typography>Created By Dhrubo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ ...textIcon }}>
            <AiOutlineInteraction />
            <span> You can interact with this scene.</span>
          </Typography>
          <Typography sx={{ ...textIcon }}>
            <MouseOutlinedIcon />
            <span> Drag with mouse</span>
          </Typography>
          <Typography sx={{ ...textIcon, marginTop: "30px" }}>
            <span>
              Click on the top right icon <br /> Or in the car Icon below to
              close this section.{" "}
            </span>
          </Typography>
          <IconButton
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              width: "100px",
              height: "100px",
              margin: "0 auto",
              display: "block",
              background: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <AiOutlineCar style={{ width: "70px", height: "70px" }} />
          </IconButton>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
