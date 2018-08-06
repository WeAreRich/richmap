import LngLatBunds from "./LngLatBounds";
import { Level } from "./Level";

export default interface map {

    getBorderGeoJson(bounds: LngLatBunds, level: Level): string;

}