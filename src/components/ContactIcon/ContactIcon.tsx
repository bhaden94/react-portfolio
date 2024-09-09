import {
  ContactIconMap,
  TContactIcon,
} from "../../sanity-client/schemaTypes/contact";

function ContactIcon({
  iconKey,
  iconClass,
}: {
  iconKey: TContactIcon;
  iconClass: string;
}) {
  const FoundIcon = ContactIconMap[iconKey];
  return FoundIcon ? (
    <FoundIcon fontSize="large" className={iconClass} />
  ) : null;
}

export default ContactIcon;
