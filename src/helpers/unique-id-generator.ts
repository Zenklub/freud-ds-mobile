export class UniqueId {
	private static ids = new Set<string>();

	private static generateRandomId = () => {
		return Math.random().toString(36).substring(2, 15);
	};

	public static generate() {
		let id = UniqueId.generateRandomId();
		while (UniqueId.ids.has(id)) {
			id = UniqueId.generateRandomId();
		}
		UniqueId.ids.add(id);
		return id;
	}
}
