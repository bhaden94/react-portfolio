import blockContent from './blockContent'
import about from './about'

export type ImageReference = {
	_key?: string;
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
};

export const schemaTypes = [about, blockContent]
