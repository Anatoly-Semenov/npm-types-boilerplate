// Example file with api-service types

import { Animal } from "./base"

export namespace BaseService {
	export type ZooName = "Moscow zoo" | "New York zoo"

	export interface Zoo {
		name: ZooName
		animals: Animal[]
	}
}
