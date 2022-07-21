import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import {
  AiOutlineInteraction,
  AiOutlineCar,
  AiOutlineFullscreen,
} from "react-icons/ai";
import { FaExpand } from "react-icons/fa";

import { IconButton } from "@mui/material";
import useFullscreen from "use-fullscreen";

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
const floatingBtn = {
  width: "50px",
  height: "50px",
  margin: "0 auto",
  display: "block",
  background: "rgba(8, 8, 8, 0.8)",
  position: "absolute",
  top: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "3",
};

export default function Header() {
  const [expanded, setExpanded] = useState(true);
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <div>
      {!isFullscreen && (
        <Accordion
          expanded={expanded}
          onChange={() => setExpanded((prev) => !prev)}
          my={3}
          sx={{
            borderRadius: "0px",
            margin: "10px 0 !important",
            padding: "15px 20px",
          }}
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
                Click on the top right icon to colapse this section <br /> Or in
                the expand Icon below to maximize this section.
              </span>
            </Typography>
            <IconButton
              onClick={() => {
                toggleFullscreen();
                setExpanded((prev) => !prev);
              }}
              sx={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                display: "block",
                background: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <AiOutlineFullscreen style={{ width: "70px", height: "70px" }} />
            </IconButton>
          </AccordionDetails>
        </Accordion>
      )}
      {isFullscreen && (
        <IconButton
          onClick={() => {
            toggleFullscreen();
            setExpanded((prev) => !prev);
          }}
          sx={{ ...floatingBtn }}
        >
          <FaExpand style={{ width: "30x", height: "30px" }} />
        </IconButton>
      )}
    </div>
  );
}
