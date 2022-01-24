import Send from "@components/icons/Send";
import { Circle } from "@mui/icons-material";
import { Button, Card, Divider, Grow } from "@mui/material";
import { SxProps } from "@mui/material";
import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import CustomBox from "./CustomBox";
import CustomFlexBox from "./CustomFlexBox";
import { Span } from "./Typography";

const defaultCenter = { lat: 59.95, lng: 30.33 };

type CustomButtonProps = {
  onClick?: () => void;
};
const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => (
  <Button color="primary" sx={{ position: "relative" }} onClick={onClick}>
    <Circle sx={{ fontSize: 8, mr: "0.25rem" }} />
    <Span>{children}</Span>
  </Button>
);

const Marker = (_props: any) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          padding: "0.5rem",
          minWidth: 0,
          borderRadius: 300,
          transform: "translate(-50%, -100%)",
        }}
        onClick={() => setOpen(!open)}
      >
        <Send />
      </Button>
      <Grow in={open}>
        <Card
          sx={{
            position: "absolute",
            bottom: "3.5rem",
            left: -250,
            fontSize: "14px",
            lineHeight: "1.5",
            fontWeight: 500,
            cursor: "auto",
            userSelect: "auto",
            fontFamily: "monsterrat, sans-serif",
          }}
        >
          <CustomFlexBox sx={{ p: "10px", bgcolor: "grey.100" }}>
            GenX 3 3G (Coll 1)
          </CustomFlexBox>
          <CustomBox sx={{ p: "10px", color: "grey.800", fontSize: 13 }}>
            16 Roy Boulevard, Brantford, Brant, Ontario, N3P 1M1, Canada 16 Roy
            Boulevard, Brantford, Brant, Ontario, N3P 1M1, Canada Boulevard,
            Brantford, Brant, Ontario, N3P 1M1, Canada
          </CustomBox>
          <Divider />
          <CustomFlexBox sx={{ p: "0.125rem" }}>
            <CustomButton onClick={() => alert("fkfdsfj")}>Zoom</CustomButton>
            <CustomButton>Route</CustomButton>
            <CustomButton>Geoforce</CustomButton>
            <CustomButton>Directions</CustomButton>
            <CustomButton>Nearest</CustomButton>
          </CustomFlexBox>
        </Card>
      </Grow>
    </div>
  );
};

type LocationMapProps = {
  center?: typeof defaultCenter;
  sx?: SxProps;
  defaultZoom?: number;
  onClick?: () => void;
};

const LocationMap: React.FC<LocationMapProps> = ({
  defaultZoom,
  center,
  sx,
  onClick,
}) => {
  return (
    <CustomBox
      sx={{
        height: "300px",
        overflow: "hidden",
        ...sx,
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          language: "en",
          key: `${process.env.GOOGLE_MAPS_API_KEY}`,
        }}
        yesIWantToUseGoogleMapApiInternals
        center={center || defaultCenter}
        defaultZoom={defaultZoom}
        onClick={onClick}
      >
        {center && <Marker {...center} />}
      </GoogleMapReact>
    </CustomBox>
  );
};

LocationMap.defaultProps = {
  defaultZoom: 15,
  onClick: () => null,
};

export default LocationMap;
