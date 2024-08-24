export function getWhiteOrBlackBasedOnContrast(color) {
	var r = parseInt(color.substr(1, 2), 16);
	var g = parseInt(color.substr(3, 2), 16);
	var b = parseInt(color.substr(5, 2), 16);
	var yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? "#000000" : "#ffffff";
}

export function darkenColor(color, percent) {
	var f = parseInt(color.slice(1), 16),
		t = percent < 0 ? 0 : 255,
		p = percent < 0 ? percent * -1 : percent,
		R = f >> 16,
		G = (f >> 8) & 0x00ff,
		B = f & 0x0000ff;
	return (
		"#" +
		(
			0x1000000 +
			(Math.round((t - R) * p) + R) * 0x10000 +
			(Math.round((t - G) * p) + G) * 0x100 +
			(Math.round((t - B) * p) + B)
		)
			.toString(16)
			.slice(1)
	);
}

export function getChipColor(chipText) {
	switch (chipText.toLowerCase()) {
		case "js":
			return "yellow-500";
		case "typescript":
			return "blue-600";
		case "npm":
			return "red-500";
		case "react":
			return "cyan-500";
		case "html":
			return "orange-400";
		case "css3" || "css":
			return "blue-500";
		case "firebase":
			return "orange-400";
		case "node.js":
			return "green-400";
		case "next.js":
			return "black";
		case "docker":
			return "blue-400";
		case "github":
			return "zinc-900";
		case "ansible":
			return "slate-950";
		case "webpack":
			return "blue-500";
		case "sass":
			return "pink-500";
		case "umbraco":
            return "indigo-700";
        case "jquery":
            return "blue-400";
		default:
			return "violet-500";
	}
}

export function getBlogChipColor(chipText) {
	switch (chipText.toLowerCase()) {
		case "short read":
			return "green-400";
		case "interesting":
			return "black";
		case "educative":
			return "white";
		default:
			return "violet-500";
	}
}
