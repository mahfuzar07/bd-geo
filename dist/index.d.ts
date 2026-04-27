interface Division {
    id: number;
    name: string;
    bn_name: string;
}
interface District {
    id: number;
    division_id: number;
    name: string;
    bn_name: string;
}
interface Upazila {
    id: number;
    district_id: number;
    name: string;
    bn_name: string;
}
interface UseDivisionsResult {
    divisions: Division[];
}
interface UseDistrictsResult {
    districts: District[];
}
interface UseUpazilasResult {
    upazilas: Upazila[];
}
interface UseBangladeshResult {
    divisions: Division[];
    districts: District[];
    upazilas: Upazila[];
    getDistrictsByDivision: (divisionId: number) => District[];
    getUpazilasByDistrict: (districtId: number) => Upazila[];
    getDivisionById: (id: number) => Division | undefined;
    getDistrictById: (id: number) => District | undefined;
    getUpazilaById: (id: number) => Upazila | undefined;
}

declare function useDivisions(): UseDivisionsResult;
declare function useDistricts(divisionId?: number): UseDistrictsResult;
declare function useUpazilas(districtId?: number): UseUpazilasResult;
declare function useBangladesh(): UseBangladeshResult;

export { type District, type Division, type Upazila, type UseBangladeshResult, type UseDistrictsResult, type UseDivisionsResult, type UseUpazilasResult, useBangladesh, useDistricts, useDivisions, useUpazilas };
