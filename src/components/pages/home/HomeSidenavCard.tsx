import CustomCard from "@components/atoms/CustomCard";
import CustomFlexBox from "@components/atoms/CustomFlexBox";
import { H6, Small } from "@components/atoms/Typography";
import MapMarker from "@components/icons/MapMarker";
import Navigation from "@components/icons/Navigation";
import { CSSProperties } from "@mui/system";
import React from "react";

interface HomeSidenavCardProps {
  title: string;
  description: string;
  status: string;
  active?: boolean;
  onClick?: () => void;
}

const barStyles: CSSProperties = {
  content: "''",
  position: "absolute",
  top: "50%",
  bottom: "50%",
  width: "4px",
  borderRadius: "2rem",
  backgroundColor: "primary.main",
  transition: "all 0.35s ease-in-out",
};
const barTopBottomStyles: CSSProperties = {
  top: "20%",
  bottom: "20%",
};

const HomeSidenavCard: React.FC<HomeSidenavCardProps> = ({
  title,
  description,
  status,
  active,
  onClick,
}) => {
  return (
    <CustomCard
      hoverEffect
      sx={{
        position: "relative",
        padding: "1.5rem",
        marginBottom: "1rem",
        cursor: "pointer",
        ":before": {
          left: 0,
        },
        ":after": {
          right: 0,
        },
        ":before, :after": {
          ...barStyles,
          ...(active ? barTopBottomStyles : {}),
        },
        ":hover": {
          ":before, :after": {
            ...barTopBottomStyles,
          },
        },
      }}
      onClick={onClick}
    >
      <CustomFlexBox sx={{ marginBottom: "0.75rem" }}>
        <Navigation fontSize="small" />
        <H6 fontWeight="600" marginLeft="0.75rem">
          {title}
        </H6>
      </CustomFlexBox>
      <CustomFlexBox sx={{ marginBottom: "0.75rem" }}>
        <MapMarker fontSize="small" />
        <H6 fontWeight="600" marginLeft="0.75rem">
          {description}
        </H6>
      </CustomFlexBox>
      <CustomFlexBox sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
        <Small
          fontWeight="600"
          color="grey.500"
          marginLeft="2rem"
          marginRight="8px"
        >
          {status}
        </Small>
        <Small
          fontWeight="600"
          color="grey.500"
          marginLeft="2rem"
          marginRight="8px"
        >
          Just moments ago
        </Small>
      </CustomFlexBox>
    </CustomCard>
  );
};

HomeSidenavCard.defaultProps = {
  onClick: () => null,
};

export default HomeSidenavCard;
