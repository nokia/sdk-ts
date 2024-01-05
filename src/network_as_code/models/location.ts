
interface CivicAddress {
    country?: string;
    a1?: string;
    a2?: string;
    a3?: string;
    a4?: string;
    a5?: string;
    a6?: string;
}
  
  
interface Location {
    /**
     * A class representing the `Location` model.
     *
     * @param longitude - The `longitude` of a location object.
     * @param latitude - The `latitude` of a location object.
     * @param civicAddress - The `civic_address` of a location object (optional).
     */
    longitude: number;
    latitude: number;
    civicAddress?: CivicAddress;
}
  
export {
    Location,
    CivicAddress
}
