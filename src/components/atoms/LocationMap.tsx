import { Place } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import GoogleMapReact from "google-map-react";
import React from "react";
import CustomBox from "./CustomBox";

const defaultCenter = { lat: 59.95, lng: 30.33 };

const Marker = (_props: any) => (
  <Place
    color="error"
    fontSize="large"
    style={{ zIndex: 1000000, transform: "translate(-50%, -100%)" }}
  />
);

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
