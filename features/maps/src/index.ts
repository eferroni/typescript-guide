/// <reference types="@types/google.maps" />

import { CustomMap } from "./customMap";
import { User } from "./user";
import { Company } from "./company";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
