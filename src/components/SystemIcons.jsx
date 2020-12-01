import makeFAIcon from "utils/makeFAIcon";

import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";

import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const InstagramIcon = makeFAIcon(faInstagram);
export const FacebookIcon = makeFAIcon(faFacebookF);

export * from "config/CustomIcons";
