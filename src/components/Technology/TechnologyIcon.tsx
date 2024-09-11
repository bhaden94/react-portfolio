import { TechnologiesIconMap } from "../../sanity-client/schemaTypes/technology";

function TechnologyIcon({
  iconKey,
  iconSize,
}: {
  iconKey: string;
  iconSize: number;
}) {
  const FoundIconTuple = TechnologiesIconMap[iconKey];
  const FoundIcon = FoundIconTuple[0];
  const iconColor = FoundIconTuple[1];
  return FoundIcon ? <FoundIcon color={iconColor} size={iconSize} /> : null;
}

export default TechnologyIcon;
