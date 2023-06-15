import { SimpleCore } from 'simple-core-state';

const instance = new SimpleCore({
	SomeExampleState_1: { key: false },
	SomeExampleState_2: false,
	SomeExampleState_3: 432432,
});

// Save to local storage
// instance.persist(["SomeExampleState_1"])

export const core = instance.core();
