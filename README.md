# @mahfuzar/use-bangladesh

React hooks for Bangladesh **divisions**, **districts**, and **upazilas** — with Bengali name support.

- 8 divisions
- 64 districts
- 500+ upazilas
- Bengali + English names
- Zero dependencies (only React)
- Full TypeScript support

---

## Installation

```bash
npm install @mahfuzar/use-bangladesh
```

---

## Hooks

### `useDivisions()` — সব বিভাগ

```tsx
import { useDivisions } from '@mahfuzar/use-bangladesh';

function DivisionSelect() {
    const { divisions } = useDivisions();

    return (
        <select>
            {divisions.map((d) => (
                <option key={d.id} value={d.id}>
                    {d.name} ({d.bn_name})
                </option>
            ))}
        </select>
    );
}
```

---

### `useDistricts(divisionId?)` — জেলা

```tsx
import { useDistricts } from '@mahfuzar/use-bangladesh';

function DistrictSelect({ divisionId }: { divisionId?: number }) {
    const { districts } = useDistricts(divisionId); // divisionId দিলে filtered

    return (
        <select>
            {districts.map((d) => (
                <option key={d.id} value={d.id}>
                    {d.name} ({d.bn_name})
                </option>
            ))}
        </select>
    );
}
```

---

### `useUpazilas(districtId?)` — উপজেলা

```tsx
import { useUpazilas } from '@mahfuzar/use-bangladesh';

function UpazilaSelect({ districtId }: { districtId?: number }) {
    const { upazilas } = useUpazilas(districtId);

    return (
        <select>
            {upazilas.map((u) => (
                <option key={u.id} value={u.id}>
                    {u.name} ({u.bn_name})
                </option>
            ))}
        </select>
    );
}
```

---

### `useBangladesh()` — সব একসাথে + helpers

```tsx
import { useBangladesh } from '@mahfuzar/use-bangladesh';

function AddressForm() {
    const [divisionId, setDivisionId] = useState<number>();
    const [districtId, setDistrictId] = useState<number>();

    const {
        divisions,
        getDistrictsByDivision,
        getUpazilasByDistrict,
        getDivisionById,
        getDistrictById,
    } = useBangladesh();

    const districts = divisionId ? getDistrictsByDivision(divisionId) : [];
    const upazilas = districtId ? getUpazilasByDistrict(districtId) : [];

    return (
        <div>
            {/* Division */}
            <select onChange={(e) => { setDivisionId(Number(e.target.value)); setDistrictId(undefined); }}>
                <option value="">Select Division</option>
                {divisions.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                ))}
            </select>

            {/* District */}
            <select onChange={(e) => setDistrictId(Number(e.target.value))} disabled={!divisionId}>
                <option value="">Select District</option>
                {districts.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                ))}
            </select>

            {/* Upazila */}
            <select disabled={!districtId}>
                <option value="">Select Upazila</option>
                {upazilas.map((u) => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                ))}
            </select>
        </div>
    );
}
```

---

## Types

```ts
interface Division {
    id: number;
    name: string;      // e.g. "Dhaka"
    bn_name: string;   // e.g. "ঢাকা"
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
```

---

## License

MIT
