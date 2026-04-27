export interface Division {
	id: number;
	name: string;
	bn_name: string;
}

export interface District {
	id: number;
	division_id: number;
	name: string;
	bn_name: string;
}

export interface Upazila {
	id: number;
	district_id: number;
	name: string;
	bn_name: string;
}

export interface UseDivisionsResult {
	divisions: Division[];
}

export interface UseDistrictsResult {
	districts: District[];
}

export interface UseUpazilasResult {
	upazilas: Upazila[];
}

export interface UseBangladeshResult {
	divisions: Division[];
	districts: District[];
	upazilas: Upazila[];
	getDistrictsByDivision: (divisionId: number) => District[];
	getUpazilasByDistrict: (districtId: number) => Upazila[];
	getDivisionById: (id: number) => Division | undefined;
	getDistrictById: (id: number) => District | undefined;
	getUpazilaById: (id: number) => Upazila | undefined;
}
