import { useMemo } from 'react';
import data from '../data/bd-data.json';
import type {
	Division,
	District,
	Upazila,
	UseDivisionsResult,
	UseDistrictsResult,
	UseUpazilasResult,
	UseBangladeshResult,
} from '../types';

const divisions = data.divisions as Division[];
const districts = data.districts as District[];
const upazilas = data.upazilas as Upazila[];

// ──────────────────────────────────────────────
// useDivisions — all 8 divisions
// ──────────────────────────────────────────────
export function useDivisions(): UseDivisionsResult {
	return { divisions };
}

// ──────────────────────────────────────────────
// useDistricts — all 64 districts
// optionally filtered by divisionId
// ──────────────────────────────────────────────
export function useDistricts(divisionId?: number): UseDistrictsResult {
	const filtered = useMemo(() => {
		if (!divisionId) return districts;
		return districts.filter((d) => d.division_id === divisionId);
	}, [divisionId]);

	return { districts: filtered };
}

// ──────────────────────────────────────────────
// useUpazilas — filtered by districtId
// ──────────────────────────────────────────────
export function useUpazilas(districtId?: number): UseUpazilasResult {
	const filtered = useMemo(() => {
		if (!districtId) return upazilas;
		return upazilas.filter((u) => u.district_id === districtId);
	}, [districtId]);

	return { upazilas: filtered };
}

// ──────────────────────────────────────────────
// useBangladesh — everything + helpers
// ──────────────────────────────────────────────
export function useBangladesh(): UseBangladeshResult {
	const getDistrictsByDivision = useMemo(
		() => (divisionId: number) => districts.filter((d) => d.division_id === divisionId),
		[],
	);

	const getUpazilasByDistrict = useMemo(
		() => (districtId: number) => upazilas.filter((u) => u.district_id === districtId),
		[],
	);

	const getDivisionById = useMemo(
		() => (id: number) => divisions.find((d) => d.id === id),
		[],
	);

	const getDistrictById = useMemo(
		() => (id: number) => districts.find((d) => d.id === id),
		[],
	);

	const getUpazilaById = useMemo(
		() => (id: number) => upazilas.find((u) => u.id === id),
		[],
	);

	return {
		divisions,
		districts,
		upazilas,
		getDistrictsByDivision,
		getUpazilasByDistrict,
		getDivisionById,
		getDistrictById,
		getUpazilaById,
	};
}
